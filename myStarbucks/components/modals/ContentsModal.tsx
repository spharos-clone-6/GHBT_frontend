import ModalHeader from "@/components/ui/ModalHeader";
import RightArrowMenu from "@/components/ui/RightArrowMenu";
import ContentCategoryContainer from "@/components/widgets/ContentCategoryContainer";
import React from "react";

export default function Contents(props: {setModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  
  const modalStyle: Object = {
    position: "fixed",
    backgroundColor: "var(--color-white)",
    top: "0",
    left: "0",
    zIndex: 999,
    width: "100%",
    height: "100%",
  }


  return (
    <div style={modalStyle}>

      <ModalHeader setModalOpen={props.setModalOpen} />
      <section className="contents-head">
        {/* 닫기 */}
        <div className="close-icon">
          <img src="assets/images/icons/menu.svg" alt="" />
        </div>
        {/*본문*/}
        <div className="contents-msg">
          <div className="msg-title">Sign in to Online Store</div>
          <div>
            <a href="">로그인</a> 후 이용해 보세요.
          </div>
        </div>
        <hr className="contents-line" />
      </section>
      {/* 제품 카테고리 */}
      <ContentCategoryContainer />
      {/*기획전/베스트 이동*/}
      <section id="nav-event-best">
        <RightArrowMenu menuName={"기획전"} link={"/event?category=케이크"} fontType='strong' description="진행중인 기획전을 만나보세요."/>
        <hr style={{margin: '15px 0'}}/>
        <RightArrowMenu menuName={"베스트"} link={"/best?category=케이크"} fontType='strong' description="스타벅스의 베스트 상품을 만나보세요."/>
      </section>
    </div>
  );
}
