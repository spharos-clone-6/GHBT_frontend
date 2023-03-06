import React from 'react'

export default function MainHeaderTop() {
  return (
    <div className="header-top">
      <div className="menu-icon">
        <img src="assets/images/icons/menu.svg" alt="" />
      </div>
      <h1>온라인 스토어</h1>
      <nav>
        <ul>
          <li>
            <img src="assets/images/icons/search.svg" />
          </li>
          <li>
            <img src="assets/images/icons/shopping-cart.svg" />
          </li>
          <li>
            <img src="assets/images/icons/close.png" />
          </li>
        </ul>
      </nav>
    </div>
  )
}
