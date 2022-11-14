import "./App.css";
import Header from "./components/Header/Header.js";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection.js";
import ExperienceOutput from "./components/ExperienceOutput/ExperienceOutput.js";
import Footer from "./components/Footer/Footer.js";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <div className="inputs">
            <ExperienceSection />
          </div>
          <div className="output">
            <ExperienceOutput />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
