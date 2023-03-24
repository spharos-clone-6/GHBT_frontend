import { accessTokenState } from "@/state/accessTokenState";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const axiosApiInstance = axios.create({
  baseURL: "http://localhost:5000/api/",
  withCredentials: true,
});

const AxiosInterceptor = ({ children }: any) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    if (!accessToken) {
      const getAccessToken = async () => {
        const result: any = await axios
          .post(
            "http://localhost:5000/api/reissue",
            {},
            { withCredentials: true }
          )
          .catch((err) => {
            console.log(err);
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
  });

  // useEffect(() => {
  //   const resInterceptor = (response: any) => {
  //     return response;
  //   };

  //   const errInterceptor = async (error: any) => {
  //     if (error.response.status === 401) {
  //       try {
  //         const originalRequest = error.config;
  //         console.log(originalRequest);
  //         const data = await axiosApiInstance.post("user/reissue");

  //         if (data?.headers?.authorization) {
  //           const accessTokenByRefresh = data?.headers?.authorization;
  //           setAccessToken(accessTokenByRefresh);
  //           originalRequest.headers.Authorization = `Bearer ${accessTokenByRefresh}`;
  //         }
  //       } catch (error) {
  //       }
  //     }
  //   };

  //   const interceptor = axiosApiInstance.interceptors.response.use(
  //     resInterceptor,
  //     errInterceptor
  //   );
  //   return () => axiosApiInstance.interceptors.response.eject(interceptor);
  // }, []);

  return children;
};

export default axiosApiInstance;
export { AxiosInterceptor };
