import Link from 'next/link'
import React from 'react'

export default function RightArrowMenu(props: { iconSrc: string, menuName: string, link: string }) {
  const {iconSrc, menuName, link} = props

  return (
    <div className="menu">
      <Link href={link}>
        <div className="menu-info">
          <img
            className="icon"
            src={iconSrc}
          />
          <p>{menuName}</p>
        </div>
        <img
          className="arrow"
          src="/images/icons/arrow-point-to-right.png"
        />
      </Link>
    </div>
  )
}
