import { categoryType } from '@/types/types';
import { useRouter } from 'next/router'
import React from 'react'

export default function CategoryButton(props: {category: categoryType}) {
  const {category} = props
  const router = useRouter();

  const handleLink = (c: string = '케이크') => {
    router.push(`/best?category=${c}`)
  }

  return (
    <button
      type="button"
      className="category-button"
      onClick={() => handleLink(category.name)}
    >
      <div className="category">
        <div className="category-img">
          <img
            src={`/images/products/category/${category.id}.jpg`}
            alt={category.name}
          />
        </div>
        <div className="category-name">
          <p>{category.name}</p>
        </div>
      </div>
    </button>
  )
}
