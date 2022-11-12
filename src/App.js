import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
