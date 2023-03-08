import React, { useState, useEffect } from "react";
import MainHeader from "../../src/components/MainHeader";
import SubHeader from "../../src/components/SubHeader";
import ProductContainer from "../../src/components/ProductContainer";
import Axios from "axios";

export default function category() {
  // const [itemList, setItemList] = useState([]);
  // // const API_URL = "http://backend.grapefruit-honey-black-tea.shop:5000/api/product/search/cake";

  // const instance = Axios.create({
  //   baseURL: '/api/category',
  //   timeout: 1000,
  //   withCredentials: true,
  // });

  // useEffect(() => {
  //   Axios.get(`/api/product`)
  //   .then((res) => {
  //     console.log(res);
  //     setItemList(res);
  //   });
  // }, [])

  // console.log(instance.data);

  // const baseUrl = "http://backend.grapefruit-honey-black-tea.shop:5000";

  // const [productItem,setProcudtItem] = useState();

  // useEffect(()=>{

  //     Axios(`${baseUrl}/api/category`).then((result)=>{
  //         console.log(result.data);
  //         setProcudtItem(result.data);
  //     })
  // },[])

  return (
    <div className="container">
      <MainHeader></MainHeader>
      <SubHeader location="best"></SubHeader>
      <ProductContainer
        sectionId={category}
        containerType="grid"
      ></ProductContainer>
    </div>
  );
}
