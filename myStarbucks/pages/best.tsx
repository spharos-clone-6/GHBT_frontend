import MainHeaderBottom from "@/components/layouts/MainHeaderBottom";
import MainHeaderTop from "@/components/layouts/MainHeaderTop";
import ProductContainer from "@/components/layouts/ProductContainer";
import SubHeader from "@/components/layouts/SubHeader";

export default function category() {
  return (
    <div className="container">
      <head>
        <MainHeaderTop />
        <MainHeaderBottom />
        <SubHeader location="best" />
      </head>
      <ProductContainer sectionId={category} containerType="grid" headerName={undefined} />
    </div>
  );
}
