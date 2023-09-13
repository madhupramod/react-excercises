import React from "react";
import "./Item.css";

function Item({
  id,
  isPacked,
  quantity,
  name,
  onDeleteItem,
  onselectCheckbox,
}) {
  return (
    <li className="item">
      <input type="checkbox" onChange={() => onselectCheckbox(id)} />
      <span style={isPacked ? { textDecoration: "line-through" } : {}}>
        {quantity} {name}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}

export default Item;
