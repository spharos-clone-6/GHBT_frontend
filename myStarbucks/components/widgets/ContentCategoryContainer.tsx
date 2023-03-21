import { categoryType } from '@/types/types';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import CategoryButton from '../ui/CategoryButton'
import RightArrowMenu from '../ui/RightArrowMenu';

export default function ContentCategoryContainer() {
  const router = useRouter();
  const { pathname, query } = useRouter();
  const [categoryList, setCatogoryList] = useState<categoryType[]>();

  const getCategory = async () => {
    const result = await axios.get(`http://backend.grapefruit-honey-black-tea.shop/api/category`)
    const filtered = result.data.filter((c: categoryType) => (c.type === '대'))
    console.log(filtered)
    setCatogoryList(filtered)
  }

  useEffect(() => {
    getCategory();
  }, [])
  
  return (
    <section id="category-items">
      <div className="get-all-items">
        <RightArrowMenu menuName={'전체 상품 보기'} link={'/'} />
      </div>
      <div className="contents-container">
        {
          categoryList && categoryList.map((c) => (
            <CategoryButton
              key={c.id}
              category={c}              
            />
          ))
        }
      </div>
    </section>
  )
}
