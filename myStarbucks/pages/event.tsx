import MainHeaderBottom from "@/components/layouts/MainHeaderBottom";
import MainHeaderTop from "@/components/layouts/MainHeaderTop";
import ProductContainer from "@/components/layouts/ProductContainer";
import SubHeader from "@/components/layouts/SubHeader";

export default function event() {
  return (
    <div className="container">
      <section id="event-info">
        <div className="first-section-sub-one">
          <img src="/images/event/event_cake.jpg" width="100%" height="100%" />
        </div>
      </section>
      <ProductContainer sectionId="event-product" containerType="grid" />
    </div>
  );
}
