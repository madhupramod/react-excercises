import "./App.css";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import pizzas from "../data";
import Footer from "./footer/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu menuItems={pizzas} />
      <Footer />
    </div>
  );
}

export default App;
