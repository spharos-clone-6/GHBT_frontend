import ProductContainerGrid from "@/components/layouts/ProductContainerGrid";

export default function event() {
  return (
    <div className="container">
      <section id="event-info">
        <div className="first-section-sub-one">
          <img src="/images/event/event_cake.jpg" width="100%" height="100%" />
        </div>
      </section>
      <ProductContainerGrid />
    </div>
  );
}
