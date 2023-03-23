import ProductContainerGrid from "@/components/layouts/ProductContainerGrid";
import { eventType, productType } from "@/types/types";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function event() {
  const [itemList, setItemList] = useState<productType[]>([]);
  const [eventInfo, setEventInfo] = useState<eventType>();
  const { query } = useRouter();

  console.log(query.category);

  useEffect(() => {
    const getData = async () => {
      console.log(query);
      const result = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/product/search/c?filter=${query.category}`
      );
      const eventResult = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/event/name/${query.category}`
      );
      setItemList(result.data.content);
      setEventInfo(eventResult.data);
    };
    getData();
  }, [query]);

  return (
    <div className="container">
      <section id="event-info">
        <div className="first-section-sub-one">
          <img
            src={`https://storage.googleapis.com${eventInfo?.descriptionUrl}`}
            width="100%"
            height="100%"
          />
        </div>
      </section>
      <ProductContainerGrid itemList={itemList} />
    </div>
  );
}
