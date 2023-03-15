import React from 'react'

export default function SubmitButton(props: {btnName: string, btnEvent: React.MouseEventHandler<HTMLButtonElement> | undefined}) {
  const {btnName, btnEvent} = props

  return (
    <section className="submit-container">
      <div className="submit-detail" >
        ---
        <div>
          <p>제목어쩌고</p>
          <p>+ 0 - ---------------- 가격</p>
        </div>
        <div>
          합계
        </div>
      </div>

      <a href="">
        <button type="submit" onClick={btnEvent}>{btnName}</button>
      </a>
    </section>
  )
}
