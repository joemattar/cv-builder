import "./App.css";
import Header from "./components/Header/Header.js";
import InputText from "./components/InputText/InputText";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <InputText placeholder="Enter your text..." />
      </div>

      <Footer />
    </div>
  );
}

export default App;
