import Item from "./Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="container mx-auto row row-cols-1 row-cols-md-4 g-4">
      {products.map((product) => (
        // <li key={product.id}>{product.nombre}</li>
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList