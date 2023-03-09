import React from 'react'
import ProductContainerGrid from './ProductContainerGrid'
import ProductContainerRecommand from './ProductContainerRecommand'
import ProductContainerVertical from './ProductContainerVertical'

export default function ProductContainer({ sectionId, containerType, headerName }) {
  return (
    <>
      {
        containerType === "horizontal" && (
          <section className="recommand" id={sectionId}>
            <div>
              <h2>{headerName}</h2>
              <ProductContainerRecommand />
            </div>
          </section>
        )
      }
      {
        containerType == "vertical" && (
          <section className="recommand" id={sectionId}>
            <h2>{headerName}</h2>
            <ProductContainerVertical />
          </section>
        )
      }
      {
        containerType == "grid" && (
          <section id={sectionId}>
            <ProductContainerGrid/>
          </section>
        )
      }
    </>
  )
}
