import RightArrowMenu from '@/components/ui/RightArrowMenu'
import DeliveryStatus from '@/components/widgets/DeliveryStatus'
import React from 'react'

export default function mypage() {
  return (
    <>
        <DeliveryStatus />
        <section className="management">
          <div id="service">
            <h2>서비스</h2>
            <RightArrowMenu
              iconSrc='/images/icons/service/shopping-list.png'
              menuName='주문 내역'
              link=''
            />
            <RightArrowMenu
              iconSrc='/images/icons/service/present-box.png'
              menuName='선물함'
              link=''
            />
            <RightArrowMenu
              iconSrc='/images/icons/service/voucher.png'
              menuName='쿠폰'
              link=''
            />
            <RightArrowMenu
              iconSrc='/images/icons/service/delivery-truck.png'
              menuName='배송지 관리'
              link=''
            />
            <RightArrowMenu
              iconSrc='/images/icons/service/bell.png'
              menuName='입고 알림 내역'
              link=''
            />
          </div>
          <div id="policy">
            <h2>약관 및 정책</h2>
            <RightArrowMenu
              iconSrc='/images/icons/service/megaphone.png'
              menuName='배송지 정보 수집 및 이용 동의'
              link=''
            />
          </div>
        </section>
    </>

  )
}
