import React from 'react'

interface Props {
  price?: number
}

export default function Price({price = 0}: Props) {
  return (
    <>
      <span>{price.toLocaleString('ko-KR')}</span>원
    </>
  )
}
