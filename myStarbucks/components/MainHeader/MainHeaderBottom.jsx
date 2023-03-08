import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function MainHeaderBottom() {
  const router = useRouter()
  return (
    <div className="header-bottom">
      <nav>
        <ul>
          <li className = {router.asPath === '/' ? 'active' : ''}>
            <Link href="/" legacyBehavior>
              <a>메인</a>
            </Link>
            
          </li>
          <li className={router.asPath.split('/')[1] === 'event' ? 'active' : ''}>
            <a href="event.html">기획전</a>
          </li>
          <li className={router.asPath.split('/')[1] === 'best' ? 'active' : ''}>
            <Link href="/best/cake" legacyBehavior>
              <a>베스트</a>
            </Link>
          </li>
          <li className={router.asPath.split('/')[1] === 'mypage' ? 'active' : ''}>
            <a href="">마이페이지</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
