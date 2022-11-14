import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Section from "./components/Section/Section.js";
import PreviewSection from "./components/PreviewSection/PreviewSection.js";
import Footer from "./components/Footer/Footer.js";
import uuid from "react-uuid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      experienceItems: [uuid()],
      educationItems: [uuid()],
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <div className="inputs">
            <Section items={this.experienceItems} />
          </div>
          <div className="output">
            <PreviewSection />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
