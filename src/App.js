import "./App.css";
import Header from "./components/Header/Header.js";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <div className="inputs">
          <ExperienceSection />
        </div>
        <div className="output"></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
