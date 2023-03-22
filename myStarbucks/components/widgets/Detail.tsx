import React from 'react'

export default function Detail(props: {pid: string | string[] | undefined, url: string | undefined}) {
  return (
    <section id="product-detail">
      <p>상품 정보</p>
      <img src={`https://storage.googleapis.com/ghbt/product_image/${props.url}`} alt="" />
      {/*JS "상품정보 더보기" 버튼 추가 필요*/}
    </section>
  )
}
