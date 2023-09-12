import React from "react";
import "./Menu.css";
function Menu({ menuItems = [] }) {
  const number = menuItems.length;
  return (
    <main className="menu">
      <header className="menu-header">
        <h2 className="menu-header-title">Our Menu</h2>
        <p className="menu-header-desc">
          Authetic italian cuisine. <span className="menu-size">{number}</span>{" "}
          creative dishes to choose from. All from our store oven, all organic,
          all delicious.
        </p>
      </header>
      <article></article>
    </main>
  );
}

export default Menu;
