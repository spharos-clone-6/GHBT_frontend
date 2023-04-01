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

  const [form, setForm] = useState({
    receiver: "",
    zipCode: "",
    addressNickname: "",
    detailAddress: "",
    baseAddress: "",
    phoneNumber1: "",
    phoneNumber2: "",
    notice: "",
    isDefault: "false",
  });

  const [phone1ErrMsg, setPhone1ErrMsg] = useState<string | null>();
  const [phone2ErrMsg, setPhone2ErrMsg] = useState<string | null>();

  const SubmitDelivery = () => {
    if (
      form.receiver === "" ||
      form.zipCode === "" ||
      form.detailAddress === "" ||
      form.baseAddress === "" ||
      form.phoneNumber1 === ""
    ) {
      alert("필수 값을 입력해 주세요");
    } else {
      axios.post(
        `${baseUrl}/api/shipping-address`,
        {
          receiver: form.receiver,
          zipCode: form.zipCode,
          addressNickname: form.addressNickname,
          detailAddress: form.detailAddress,
          baseAddress: form.baseAddress,
          phoneNumber1: form.phoneNumber1,
          phoneNumber2: form.phoneNumber2,
          notice: form.notice,
          isDefault: form.isDefault,
        },
        {
          headers: {
            Authorization: AT,
          },
        }
      );
    }
  };

  console.log(form);

  const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;
  const handlePhoneNumber1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, phoneNumber1: e.target.value });
    if (!phoneRegex.test(e.target.value))
      setPhone1ErrMsg(`⚠️ 전화번호 형식에 맞게 입력해주세요.`);
    else setPhone1ErrMsg(null);
  };

  const handlePhoneNumber2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, phoneNumber2: e.target.value });
    if (!phoneRegex.test(e.target.value))
      setPhone2ErrMsg(`⚠️ 전화번호 형식에 맞게 입력해주세요.`);
    else setPhone2ErrMsg(null);
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
                value={form.addressNickname}
                onChange={(e) =>
                  setForm({ ...form, addressNickname: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="받는 분 *"
                value={form.receiver}
                onChange={(e) => setForm({ ...form, receiver: e.target.value })}
              />
              <div className="post-number">
                <input
                  type="text"
                  placeholder="우편번호 *"
                  value={form.zipCode}
                  onChange={(e) =>
                    setForm({ ...form, zipCode: e.target.value })
                  }
                />
                <a href="">
                  <div className="search-address">주소검색</div>
                </a>
              </div>
              <input
                type="text"
                placeholder="기본주소 *"
                value={form.baseAddress}
                onChange={(e) =>
                  setForm({ ...form, baseAddress: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="상세주소 *"
                value={form.detailAddress}
                onChange={(e) =>
                  setForm({ ...form, detailAddress: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="연락처1 *"
                onChange={handlePhoneNumber1}
              />
              {phone1ErrMsg}
              <input
                type="text"
                placeholder="연락처2"
                onChange={handlePhoneNumber2}
              />
              {phone2ErrMsg}
              <div className="delivery-memo">
                <p>배송 메모</p>
                <select
                  name=""
                  id=""
                  onChange={(e) => setForm({ ...form, notice: e.target.value })}
                >
                  <option value="">배송 메모를 선택해 주세요.</option>
                  <option value="배송 전 연락 바랍니다.">
                    배송 전 연락 바랍니다.
                  </option>
                  <option value="부재 시 경비실에 맡겨주세요.">
                    부재 시 경비실에 맡겨주세요.
                  </option>
                  <option value="부재 시 문 앞에 놓아주세요.">
                    부재 시 문 앞에 놓아주세요.
                  </option>
                  <option value="부재 시 전화 또는 문자 남겨주세요.">
                    부재 시 전화 또는 문자 남겨주세요.
                  </option>
                  {/* <option value="">직접 입력</option> */}
                </select>
              </div>
              {/* <div className="save-delivery">
                <label style={{ lineHeight: "55px" }}>
                  <input
                    type="checkbox"
                    value={"true"}
                    onChange={(e) =>
                      setForm({ ...form, isDefault: e.target.value })
                    }
                  />
                  기본 배송지로 저장합니다.
                </label>
              </div> */}
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
