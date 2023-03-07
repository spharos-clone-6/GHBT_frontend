import React from 'react'
import ProductContainerRecommand from './ProductContainer/ProductContainerRecommand'
import ProductContainerVertical from './ProductContainer/ProductContainerVertical'

export default function ProductContainer({ sectionId, containerType, headerName }) {
  return (
    <>
      {
        containerType === "horizontal" && (
          <section className="recommand" id={sectionId}>
            <div>
              <h2>{headerName}</h2>
              <ProductContainerRecommand/>
            </div>
          </section>
        )
      }
      {
        containerType == "vertical" && (
          <section className="recommand" id={sectionId}>
            <h2>{headerName}</h2>
            <ProductContainerVertical/>
          </section>
        )
      }
    </>
  )
}
