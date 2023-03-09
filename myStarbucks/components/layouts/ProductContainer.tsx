import React from 'react'
import ProductContainerGrid from './ProductContainerGrid'
import ProductContainerRecommand from './ProductContainerRecommand'
import ProductContainerVertical from './ProductContainerVertical'

export default function ProductContainer(props: { sectionId: string, containerType: string, headerName: string }) {
  return (
    <>
      {
        props.containerType === "horizontal" && (
          <section className="recommand" id={props.sectionId}>
            <div>
              <h2>{props.headerName}</h2>
              <ProductContainerRecommand />
            </div>
          </section>
        )
      }
      {
        props.containerType == "vertical" && (
          <section className="recommand" id={props.sectionId}>
            <h2>{props.headerName}</h2>
            <ProductContainerVertical />
          </section>
        )
      }
      {
        props.containerType == "grid" && (
          <section id={props.sectionId}>
            <ProductContainerGrid/>
          </section>
        )
      }
    </>
  )
}
