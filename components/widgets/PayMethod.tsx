import React, { Dispatch, SetStateAction } from "react";

interface payMethod {
  method: string;
  setMethod: Dispatch<SetStateAction<string>>;
}

export default function PayMethod({ method, setMethod }: payMethod) {
  const handleChange = (e: any) => {
    console.log("선택한 값:", e.target.value);
    setMethod(e.target.value);
  };

  return (
    <section id="pay-method">
      <div>
        <p>결제 수단</p>
      </div>
      <div className="pay-choice">
        <div>
          <label style={{ fontSize: "0.9rem" }}>
            <input
              type="radio"
              name="pay"
              value="starbucks-card"
              onChange={handleChange}
            />{" "}
            스타벅스 카드
          </label>
        </div>
        <div>
          <label style={{ fontSize: "0.9rem" }}>
            <input
              type="radio"
              name="pay"
              value="kakao-pay"
              onChange={handleChange}
            />{" "}
            카카오페이
          </label>
        </div>
      </div>
    </section>
  );
}
