import { useContext, useState } from "react";
import { InventoryContext } from "../data/inventoryContext";
import { nanoid } from "nanoid";

export default function ProductForm() {
  const {
    addProduct,
    setEditing,
    updateProduct,
    editing,
    products
  } = useContext(InventoryContext);

  let initialData = {
    name: "",
    inStock: false
  };
  if (editing !== "new") {
    initialData = products.find(function (p) {
      return p.id === editing;
    });
  }

  const [product, setProduct] = useState(initialData);

  function handleSubmit(e) {
    e.preventDefault();

    if (editing === "new") {
      addProduct({
        ...product,
        id: nanoid()
      });
    } else {
      updateProduct(product);
    }
  }

  function handleInput(e, field) {
    setProduct({ ...product, [field]: e.target.value });
  }
  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task:</label>
          <input
            type="text"
            value={product.name}
            onChange={(e) => handleInput(e, "name")}
          />
        </div>
        <div className="form-btns">
          <button className="cancel-btn" onClick={() => setEditing(null)}>
            cancel
          </button>
          <button className="save-btn">save</button>
        </div>
      </form>
    </div>
  );
}
