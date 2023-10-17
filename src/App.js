import "./styles.css";
import { useState } from "react";
import ProductForm from "./components/ProductForm";

import { InventoryContext } from "./data/inventoryContext";
import ProductList from "./components/ProductList";

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [editing, setEditing] = useState(null);

  function addProduct(product) {
    setProducts([...products, product]);
    setEditing(null);
  }

  function updateProduct(product) {
    setProducts(
      products.map(function (p) {
        if (p.id === product.id) {
          return product;
        } else {
          return p;
        }
      })
    );
    setEditing(null);
  }

  function deleteProduct(id) {
    setProducts(
      products.filter(function (p) {
        return p.id !== id;
      })
    );
  }

  return (
    <div className="App">
      <InventoryContext.Provider
        value={{
          products,
          addProduct,
          deleteProduct,
          updateProduct,
          setEditing,
          editing
        }}
      >
        <h2>Task Management App</h2>
        {!editing ? (
          <>
            <ProductList />
            <button
              className="save-btn add-btn"
              onClick={() => setEditing("new")}
            >
              Add Task
            </button>
          </>
        ) : (
          <ProductForm />
        )}
      </InventoryContext.Provider>
    </div>
  );
}

const initialProducts = [];
