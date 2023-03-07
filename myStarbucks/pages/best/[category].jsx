import React, { useState, useEffect } from 'react'
import MainHeader from '../../src/components/MainHeader'
import SubHeader from '../../src/components/SubHeader'
import ProductContainer from '../../src/components/ProductContainer'
import Axios from 'axios';

export default function category() {
  // const [itemList, setItemList] = useState([]);
  // const API_URL = "http://backend.grapefruit-honey-black-tea.shop:5000/api/product/search/cake";

  // // useEffect(() => {
  // //   Axios.get(API_URL)
  // //   .then((res) => {
  // //     console.log(res);
  // //     setItemList(res);
  // //   });
  // // }, [])
  
  // console.log(axiosApiInstance);

  return (
    <div className="container">
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
      <ProductContainer
        sectionId={category}
        containerType='grid'
      ></ProductContainer>

    </div>
  )
}
