import React from "react";
import "./PizzaList.css";
import Pizza from "./pizza/Pizza";

function PizzaList({ pizzas }) {
  return (
    <ul className="pizzas">
      {pizzas.map((pizza) => (
        <Pizza key={pizza.id} {...pizza} />
      ))}
    </ul>
  );
}

export default PizzaList;
