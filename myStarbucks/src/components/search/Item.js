export default function Item({ item }) {
  const {
    name,
    image_link,
    price,
    description,
    updated_at,
    category,
    product_type,
    product_link,
  } = item;
  return (
    <>
      <div>
        <div>
          <img src={image_link} alt={name} />
        </div>
        <div>
          <strong>{name}</strong>
          <strong>${price}</strong>
          <span>
            {category ? `${category}/` : ""}
            {product_type}
          </span>
          <button color="orange">구매하기</button>
        </div>
      </div>
      <header as="h3">Description</header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
    </>
  );
}
