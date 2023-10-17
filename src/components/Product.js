import { useContext } from "react";

import { InventoryContext } from "../data/inventoryContext";

export default function Product({ product }) {
  const { deleteProduct, setEditing, updateProduct } = useContext(
    InventoryContext
  );

  function handleCheckbox() {
    updateProduct({
      ...product,
      inStock: !product.inStock
    });
  }

  return (
    <div className="product">
      <label>
        <input
          type="checkbox"
          checked={product.inStock}
          onChange={handleCheckbox}
        />
        {product.inStock ? <del>{product.name}</del> : product.name}
      </label>
      <div className="buttons">
        <button className="edit-btn" onClick={() => setEditing(product.id)}>
          Edit
        </button>
        <button
          className="delete-btn"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
