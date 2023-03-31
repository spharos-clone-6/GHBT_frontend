import React, { useState } from "react";
import Sheet, { SheetRef } from "react-modal-sheet";
import myStyle from "./ProductOrderSection.module.css";
import Button from "@/components/ui/Button";
import ProductDetailSubmit from "@/components/widgets/ProductDetailSubmit";
import ItemAmount from "@/components/ui/ItemAmount";
import { productType } from "@/types/types";
import Price from "@/components/ui/Price";

export default function ProductOrderSection(props: {
  product: productType;
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  return (
    <>
      <div
        className={
          isOpen ? myStyle.footerMenuSection : myStyle.footerMenuSectionOff
        }
      >
        {!isOpen ? (
          <div
            className={myStyle.toggleButton}
            onClick={() => setIsOpen(true)}
          />
        ) : null}
        {isOpen ? (
          <Button btnType="button" btnEvent={() => setIsOpen(false)}>
            장바구니
          </Button>
        ) : (
          <Button btnType="button" btnEvent={() => setIsOpen(true)}>
            구매하기
          </Button>
        )}
      </div>
      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        detent="content-height"
        style={{
          zIndex: 100,
        }}
      >
        <Sheet.Container>
          <Sheet.Content>
            <div
              style={{
                boxSizing: "border-box",
                paddingBottom: "2.3rem",
                paddingTop: "1rem",
              }}
            >
              {isOpen ? (
                <div
                  className={myStyle.toggleButton}
                  onClick={() => setIsOpen(false)}
                />
              ) : null}
              <ItemAmount
                price={props.product.price}
                label={props.product.name}
                setTotalPrice={setTotalPrice}
                count={props.itemCount}
                setCount={props.setItemCount}
              />
              <p
                style={{
                  textAlign: "right",
                  padding: "0 30px",
                  marginBottom: "80px",
                  fontWeight: "bold",
                }}
              >
                합계 <Price price={totalPrice} size="large" />
              </p>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}
