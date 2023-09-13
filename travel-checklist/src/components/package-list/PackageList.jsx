import React from "react";
import "./PackageList.css";
import Item from "./Item";

function PackageList({ items, onDeleteItem, onselectCheckbox }) {
  return (
    <section className="package-list ">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            quantity={item.quantity}
            name={item.item}
            isPacked={item.isPacked}
            onDeleteItem={onDeleteItem}
            onselectCheckbox={onselectCheckbox}
          ></Item>
        ))}
      </ul>
    </section>
  );
}

export default PackageList;
