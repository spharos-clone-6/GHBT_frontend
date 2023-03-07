import React from 'react'
import ProductContainerRecommand from './ProductContainer/ProductContainerRecommand'
import ProductContainerVertical from './ProductContainer/ProductContainerVertical'

export default function ProductContainer({ sectionId, containerType }) {
  return (
    <>
      {
        containerType === "horizontal" && (
          <section className="recommand" id={sectionId}>
            <div>
              <h2>Cherry Blossom🌸</h2>
              <ProductContainerRecommand/>
            </div>
          </section>
        )
      }
      {
        containerType == "vertical" && (
          <section className="recommand" id={sectionId}>
            <h2>바리스타 춘식 MD💛</h2>
            <ProductContainerVertical/>
          </section>
        )
      }
    </>
  )
}
