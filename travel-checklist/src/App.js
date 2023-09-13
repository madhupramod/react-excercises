import { useState } from "react";
import "./App.css";
import AddItemForm from "./components/additem-form/AddItemForm";
import Header from "./components/header/Header";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }
  return (
    <div className="app">
      <Header />
      <AddItemForm onAddItem={handleAddItem} />
    </div>
  );
}

export default App;
