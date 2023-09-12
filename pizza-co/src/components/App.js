import "./App.css";
import Header from "./header/Header";
import Menu from "./menu/Menu";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <main>Main Section</main>
      <footer>footer Component</footer>
    </div>
  );
}

export default App;
