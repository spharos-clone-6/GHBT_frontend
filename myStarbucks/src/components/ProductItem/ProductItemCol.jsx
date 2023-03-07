import React from 'react'

export default function ProductItemCol({item, idx}) {
  return (
    <div className="product-item">
      <img src={item.imgSrc} className="thumbnail" />
      <div className="product-item-info">
        <p className="item-best">Best</p>
        <div className='product-item-info'>
          <p className="product-item-name">{item.title}</p>
          <p className="product-item-price">{item.price}</p>
        </div>
      </div>
      <div className="rank-label">
        <p>{idx+1}</p>
      </div>
    </div>
  )
}
