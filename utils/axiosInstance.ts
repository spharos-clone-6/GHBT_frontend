import { accessTokenState } from "@/state/accessTokenState";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Config from "@/configs/config.export";

//  baseURL: "http://localhost:5000/api/",
const axiosApiInstance = axios.create({
  baseURL: "https://backend.grapefruit-honey-black-tea.shop/api/",
  withCredentials: true,
});

const AxiosInterceptor = ({ children }: any) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  console.log("access1번");

  useEffect(() => {
    console.log("access2번");

    // 새로고침으로 accessToken이 없는 경우 reissue로 accesstoken 저장
    if (!accessToken) {
      const getAccessToken = async () => {
        const result: any = await axiosApiInstance
          .post("reissue")
          .catch((err) => {
            console.log("accessToken 제거");
            setAccessToken("");
          });
        if (result?.headers?.authorization) {
          const setAccess = result.headers.authorization.replace(
            /Bearer /g,
            ""
          );
          setAccessToken(setAccess);
        }
      };
      getAccessToken();
    }
  }, []);

  //access 헤더에 입력
  useEffect(() => {
    console.log("access3번");
    console.log("accessToken은???", accessToken);
    if (accessToken) console.log("access토큰확인", accessToken);
    // Authorization 영역에 accessToken 설정하는 config
    const reqInterceptor = (config: any) => {
      if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    };
    //axios 헤더에 삽입과정
    const interceptor =
      axiosApiInstance.interceptors.request.use(reqInterceptor);
    return () => {
      axiosApiInstance.interceptors.request.eject(interceptor);
    };
  }, [accessToken]);

  //accessToken 만료 시, 없어서 401 에러 뜨는 경우 accessToken 입력 받은 후 바로 request요청하는 과정
  useEffect(() => {
    const resInterceptor = (response: any) => {
      return response;
    };

    const errInterceptor = async (error: any) => {
      console.log("에러확인용", error.response);
      if (error.response.status === 401) {
        try {
          const originalRequest = error.config;
          console.log("origin에러", originalRequest);
          const data = await axiosApiInstance.post("reissue");

          if (data?.headers?.authorization) {
            const accessTokenByRefresh = data?.headers?.authorization;
            const setAcessTokenByRefresh = accessTokenByRefresh.replace(
              /Bearer /g,
              ""
            );
            setAccessToken(setAcessTokenByRefresh);
            console.log("엑세스토큰", accessTokenByRefresh);
            originalRequest.headers.Authorization = `Bearer ${setAcessTokenByRefresh}`;
            return await axiosApiInstance.request(originalRequest);
          }
        } catch (error) {}
      }
    };

    const interceptor = axiosApiInstance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );
    return () => axiosApiInstance.interceptors.response.eject(interceptor);
  }, []);

  return children;
};

export default axiosApiInstance;
export { AxiosInterceptor };
