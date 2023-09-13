import React from "react";
import "./Footer.css";

function Footer({ items }) {
  if (!items || items.length === 0)
    return <footer>Start adding some items to your packing list 🚀</footer>;
  const numItems = items.length;
  const numPackedItems = items.reduce(
    (acc, item) => (item.isPacked ? acc + 1 : acc),
    0
  );

  if (numItems === numPackedItems) {
    return <footer>You are ready to go ✈️</footer>;
  }
  const percentPacked = ((numPackedItems / numItems) * 100).toFixed(2);

  return (
    <footer>
      You have {numItems} items on your list, and you already packed{" "}
      {numPackedItems} ({percentPacked}%)
    </footer>
  );
}

export default Footer;
