import React from 'react'

export default function SelectOrder() {
  return (
    <div className="products-order">
      <select className="select-toggle">
        <option value="order-new">신상품순</option>
        <option value="order-recommand">추천순</option>
        <option value="order-low">낮은가격순</option>
        <option value="order-high">높은가격순</option>
      </select>
    </div>
  )
}
