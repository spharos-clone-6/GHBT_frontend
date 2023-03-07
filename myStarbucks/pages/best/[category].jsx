import React from 'react'
import MainHeader from '../../src/components/MainHeader'
import SubHeader from '../../src/components/SubHeader'
import ProductContainer from '../../src/components/ProductContainer'

export default function category() {
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
