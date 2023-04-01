import { deliveryListType } from "@/types/types";
import React, { useState } from "react";
import BottomFixedContainer from "@/components/ui/BottomFixedContainer";
import Button from "@/components/ui/Button";
import ModalHeader from "@/components/ui/ModalHeader";
import { useRecoilState } from "recoil";
import { deliveryListState } from "@/state/delivery";
import axios from "axios";
import Config from "@/configs/config.export";
import { AT } from "@/data/StaticData";

export default function DeliveryRegister() {
  const [deliveryList, setDeliveryList] = useRecoilState(deliveryListState);
  const { baseUrl } = Config();

  const [receiver, setReceiver] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [addressNickname, setAddressNickname] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [baseAddress, setBaseAddress] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [notice, setNotice] = useState("");
  const [isDefault, setIsDefault] = useState("false");

  const [phoneErrMsg, setPhoneErrMsg] = useState<string | null>();

  const SubmitDelivery = () => {
    const formData = new FormData();
    formData.append("receiver", receiver);
    formData.append("zipCode", zipCode);
    formData.append("addressNickname", addressNickname);
    formData.append("detailAddress", detailAddress);
    formData.append("baseAddress", baseAddress);
    formData.append("phoneNumber1", phoneNumber1);
    formData.append("phoneNumber2", phoneNumber2);
    formData.append("notice", notice);
    formData.append("isDefault", isDefault);

    console.log(formData);
    axios.post(
      `${baseUrl}/api/shipping-address`,
      {
        receiver: receiver,
        zipCode: zipCode,
        addressNickname: addressNickname,
        detailAddress: detailAddress,
        baseAddress: baseAddress,
        phoneNumber1: phoneNumber1,
        phoneNumber2: phoneNumber2,
        notice: notice,
        isDefault: isDefault,
      },
      {
        headers: {
          Authorization: AT,
          "Content-Type": "application/json",
        },
      }
    );
  };

  const handleAddressNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressNickname(e.target.value);
    console.log(e.target.value);
  };

  const handleReceiver = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiver(e.target.value);
  };

  const handleDetailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value);
  };

  const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;
  const handlePhoneNumber1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber1(e.target.value);
    if (!phoneRegex.test(e.target.value))
      setPhoneErrMsg(`⚠️ 전화번호 형식에 맞게 입력해주세요.`);
    else setPhoneErrMsg(null);
  };
  return (
    <>
      <ModalHeader headerName="배송지 등록" />
      <div className="cart-container">
        <div>
          <div id="info-header">
            <div>배송지 정보</div>
          </div>
          <section id="delivery-input">
            <div>
              <input
                type="text"
                placeholder="주소 별칭"
                onChange={handleAddressNickname}
              />
              <input
                type="text"
                placeholder="받는 분 *"
                onChange={handleReceiver}
              />
              <div className="post-number">
                <input type="text" placeholder="우편번호 *" />
                <a href="">
                  <div className="search-address">주소검색</div>
                </a>
              </div>
              <input type="text" placeholder="기본주소 *" />
              <input
                type="text"
                placeholder="상세주소 *"
                onChange={handleDetailAddress}
              />
              <input
                type="text"
                placeholder="연락처1 *"
                onChange={handlePhoneNumber1}
              />
              {phoneErrMsg}
              <input type="text" placeholder="연락처2" />
              <div className="delivery-memo">
                <p>배송 메모</p>
                <select name="" id="">
                  <option value="">배송 메모를 선택해 주세요.</option>
                  <option value="">배송 전 연락 바랍니다.</option>
                  <option value="">부재 시 경비실에 맡겨주세요.</option>
                  <option value="">부재 시 문 앞에 놓아주세요.</option>
                  <option value="">부재 시 전화 또는 문자 남겨주세요.</option>
                  <option value="">직접 입력</option>
                </select>
              </div>
            </div>
          </section>
          <BottomFixedContainer>
            <Button btnType="button" btnEvent={SubmitDelivery}>
              등록하기
            </Button>
          </BottomFixedContainer>
        </div>
      </div>
    </>
  );
}
