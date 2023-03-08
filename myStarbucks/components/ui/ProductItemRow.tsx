import React from 'react'

export default function ProductItemRow({item}) {
  return (
    <div className="chunsik-item">
      <img
        src={item.imgSrc}
        alt={item.title}
      />
      <div className="chunsik-item-info">
        <p className="item-title">{item.title}</p>
        <p className="item-price">
          <span>{item.price.toLocaleString('ko-KR')}</span>원
        </p>
      </div>
    </div>
  )
}
