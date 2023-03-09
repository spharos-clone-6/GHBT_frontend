import MainHeaderBottom from "@/components/layouts/MainHeaderBottom";
import MainHeaderTop from "@/components/layouts/MainHeaderTop";
import ProductContainer from "@/components/layouts/ProductContainer";
import SubHeader from "@/components/layouts/SubHeader";

export default function best() {
  return (
    <div className="first-section-sub-one">
      <ProductContainer
        sectionId="best-product"
        containerType="grid"
        headerName=""
      />
    </div>
  );
}
