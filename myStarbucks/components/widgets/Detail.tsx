import React from 'react'

export default function Detail(props: {pid: string | string[] | undefined}) {
  return (
    <section id="product-detail">
      <p>상품 정보</p>
      <img src="/images/products/product-detail.png" alt="" />
      {/*JS "상품정보 더보기" 버튼 추가 필요*/}
    </section>
  )
}
