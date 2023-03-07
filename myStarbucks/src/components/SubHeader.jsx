import { useRouter } from 'next/router'
import React from 'react'

export default function SubHeader() {
  const dummyCategory = [
    {
      id:'cake',
      title:'케이크',
    },
    {
      id: 'tumbler',
      title: '텀블러/보온병',
    },
    {
      id: 'cup',
      title: '머그/컵',
    },
    {
      id: 'lifestyle',
      title: '라이프스타일',
    },
    {
      id: 'tea',
      title: '티/커피용품',
    },
    {
      id: 'set',
      title: '세트',
    },
  ]

  const router = useRouter()
  console.log(router.asPath)

  return (
    <div className="header-sub first-section">
      <nav>
        <ul>
          {
            dummyCategory.map((category) => (
              <li className={router.asPath === "/best/"+category.id ? "active" : ""}
                onClick={
                  () => router.push(`/best/${category.id}`)
                }
              >{category.title}</li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}
