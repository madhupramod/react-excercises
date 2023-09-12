import "./App.css";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import pizzas from "../data";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu menuItems={pizzas} />
      <footer>footer Component</footer>
    </div>
  );
}

export default App;
