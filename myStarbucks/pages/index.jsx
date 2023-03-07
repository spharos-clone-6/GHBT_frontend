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
      />
      <ProductContainer
        sectionId = "recommand-md-2"
        containerType = "horizontal"
      />
      <ProductContainer
        sectionId = "recommand-md-3"
        containerType = "horizontal"
      />
      <ProductContainer
        sectionId="chunsik"
        containerType = "vertical"
      />
      <footer></footer>
    </div>

  )
}
