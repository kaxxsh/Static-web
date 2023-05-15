import "./App.css";
import Head from "./components/Head";
import Master from "./components/Master";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img
          className="pizza-logo"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          src={logo}
          alt="pizza logo"
        />
      </div>
      <Head />
      <Master />
    </div>
  );
}

export default App;
