import React, { useState } from "react";
import "./PackageList.css";
import Item from "./Item";

function PackageList({ items, onDeleteItem, onselectCheckbox, onClearList }) {
  const [sortBy, setSortBy] = useState("insertion");

  const sortedItems = items.slice().sort((a, b) => {
    if (sortBy === "packedStatus") {
      return a.isPacked - b.isPacked;
    } else if (sortBy === "ascending") {
      if (a.name > b.name) return 1;
      else if (a.name < b.name) return -1;
      else return 0;
    } else {
      return 1;
    }
  });

  return (
    <section className="package-list ">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            quantity={item.quantity}
            name={item.name}
            isPacked={item.isPacked}
            onDeleteItem={onDeleteItem}
            onselectCheckbox={onselectCheckbox}
          ></Item>
        ))}
      </ul>
      <div className="actions">
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="packedStatus">Sort by packed status</option>
          <option value="insertion">Sort by insertion order</option>
          <option value="ascending">Sort by name(ascending)</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </section>
  );
}

export default PackageList;
