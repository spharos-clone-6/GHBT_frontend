import React from 'react'

interface Props {
  price?: number
}

export default function Price({price = 0}: Props) {
  return (
    <div className="price">
      <span>{price.toLocaleString('ko-KR')}</span>원
    </div>
  )
}
