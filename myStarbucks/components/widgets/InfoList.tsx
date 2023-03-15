import React from 'react'
import RightArrowMenu from '../ui/RightArrowMenu'

export default function InfoList() {
  return (
    <div className='info-list'>
      <RightArrowMenu
        iconSrc=""
        menuName="이용조건 및 배송안내"
        link=""
      />
      <hr />
      <RightArrowMenu
        iconSrc=""
        menuName="상품제공정보고시"
        link=""
      />
      <hr />

      <RightArrowMenu
        iconSrc=""
        menuName="교환/반품 안내"
        link=""
      />
      <hr />

      <RightArrowMenu
        iconSrc=""
        menuName="취소/환불 안내"
        link=""
      />
    </div>

  )
}
