import Link from 'next/link'
import React from 'react'

export default function LinkImage(props: { route: string, imageSrc: string, alt: string }) {
  return (
    <Link href={props.route}>
      <img
        src={props.imageSrc}
        width="100%"
        height="100%"
        alt={props.alt}
      />
    </Link>
  )
}
