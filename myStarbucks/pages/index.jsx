import React from 'react'
import EventBanner from '../src/components/EventBanner'
import MainHeader from '../src/components/MainHeader'
import ProductContainer from '../src/components/ProductContainer'

export default function index() {
  return (
    <div className="container">
      <MainHeader></MainHeader>
      <EventBanner></EventBanner>
      <ProductContainer
        sectionId = "recommand-md-1"
        containerType = "horizontal"
        headerName = "Cherry Blossom 🌸"
      />
      <ProductContainer
        sectionId = "recommand-md-2"
        containerType = "horizontal"
        headerName = "Cherry Blossom 💜"
      />
      <ProductContainer
        sectionId = "recommand-md-3"
        containerType = "horizontal"
        headerName = "달콤한 스타벅스 케이크 🍰"
      />
      <ProductContainer
        sectionId="chunsik"
        containerType = "vertical"
        headerName = "바리스타 춘식 💛"
      />
      <footer></footer>
    </div>

  )
}
