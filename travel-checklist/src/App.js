import { useState } from "react";
import "./App.css";
import AddItemForm from "./components/additem-form/AddItemForm";
import Header from "./components/header/Header";
import PackageList from "./components/package-list/PackageList";
import Footer from "./components/footer/Footer";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((list) => list.filter((item) => item.id !== id));
  }

  function handleCheckBoxSelection(id) {
    setItems((list) =>
      list.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : { ...item }
      )
    );
  }
  function handleClearList() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <AddItemForm onAddItem={handleAddItem} />
      <PackageList
        items={items}
        onDeleteItem={handleDeleteItem}
        onselectCheckbox={handleCheckBoxSelection}
        onClearList={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
