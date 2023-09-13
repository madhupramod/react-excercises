import React, { useState } from "react";
import "./AddItemForm.css";

function AddItemForm({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!quantity || !name) return;
    const newItem = {
      id: Date.now(),
      quantity: quantity,
      name: name,
      isPacked: false,
    };
    onAddItem(newItem);
    setQuantity(1);
    setName("");
  }

  return (
    <form className="additem-form" onSubmit={handleSubmit}>
      <h3>What do you need for 😊 trip</h3>
      <select
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => {
          return (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        value={name}
        placeholder="item..."
        onChange={(e) => setName(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

export default AddItemForm;
