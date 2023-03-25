import Config from "@/configs/config.export";
import { productType } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default (url: string, keyword: string | string[]): productType[] => {
  const [data, setData] = useState<productType[]>([]);
  const { baseUrl } = Config();

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/product/n/search/${url}`)
      .then((res) => {
        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("키워드 변경으로 API 호출: ", keyword);
  }, [keyword]);

  return data;
};
