export default function category() {
  return (
    <div className="container">
      <MainHeader />
      <SubHeader location="best" />
      <ProductContainer sectionId={category} containerType="grid" />
    </div>
  );
}
