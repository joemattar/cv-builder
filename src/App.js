import React from "react";
import "./App.css";
import uuid from "react-uuid";
import itemTemplates from "./templates/itemTemplates.js";
import Header from "./components/Header/Header.js";
import Section from "./components/Section/Section.js";
import PreviewSection from "./components/PreviewSection/PreviewSection.js";
import Footer from "./components/Footer/Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personalItems: [uuid()],
      experienceItems: [uuid()],
      educationItems: [uuid()],

      // TO REVIEW - OBSOLETE ???
      personalNumberOfPlaceholders: Object.values(
        itemTemplates.personal.placeholders
      ).length,
      experienceNumberOfPlaceholders: Object.values(
        itemTemplates.experience.placeholders
      ).length,
      educationNumberOfPlaceholders: Object.values(
        itemTemplates.education.placeholders
      ).length,
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getInputId = this.getInputId.bind(this);
  }

  // Method to add an input section item component given a data-type
  addItem(event) {
    if (event.target.getAttribute("data-type") === "experience") {
      this.setState({
        experienceItems: this.state.experienceItems.concat([uuid()]),
      });
    } else if (event.target.getAttribute("data-type") === "education") {
      this.setState({
        educationItems: this.state.educationItems.concat([uuid()]),
      });
    }
  }

  // Method to delete an input section item component given a data-type
  deleteItem(event) {
    const idToDelete = event.target.name;
    if (event.target.getAttribute("data-type") === "experience") {
      const indexToDelete = this.state.experienceItems.indexOf(idToDelete);
      this.setState({
        experienceItems: this.state.experienceItems
          .slice(0, indexToDelete)
          .concat(this.state.experienceItems.slice(indexToDelete + 1)),
      });
    } else if (event.target.getAttribute("data-type") === "education") {
      const indexToDelete = this.state.educationItems.indexOf(idToDelete);
      this.setState({
        educationItems: this.state.educationItems
          .slice(0, indexToDelete)
          .concat(this.state.educationItems.slice(indexToDelete + 1)),
      });
    }
  }

  getInputId(event) {
    console.log(event.target.id);
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <div className="inputs">
            <Section
              data-type={itemTemplates.personal.dataType}
              titleLong={itemTemplates.personal.dataTitleLong}
              titleShort={itemTemplates.personal.dataTitleShort}
              items={this.state.personalItems}
              getInputIdHandler={this.getInputId}
            />
            <Section
              data-type={itemTemplates.experience.dataType}
              titleLong={itemTemplates.experience.dataTitleLong}
              titleShort={itemTemplates.experience.dataTitleShort}
              items={this.state.experienceItems}
              addItemHandler={this.addItem}
              deleteItemHandler={this.deleteItem}
              getInputIdHandler={this.getInputId}
            />
            <Section
              data-type={itemTemplates.education.dataType}
              titleLong={itemTemplates.education.dataTitleLong}
              titleShort={itemTemplates.education.dataTitleShort}
              items={this.state.educationItems}
              addItemHandler={this.addItem}
              deleteItemHandler={this.deleteItem}
              getInputIdHandler={this.getInputId}
            />
          </div>
          <div className="output">
            <PreviewSection
              data-type={itemTemplates.personal.dataType}
              titleLong={itemTemplates.personal.dataTitleLong}
              items={this.state.personalItems}
              getInputIdHandler={this.getInputId}
            />
            <PreviewSection
              data-type={itemTemplates.experience.dataType}
              titleLong={itemTemplates.experience.dataTitleLong}
              items={this.state.experienceItems}
              getInputIdHandler={this.getInputId}
            />
            <PreviewSection
              data-type={itemTemplates.education.dataType}
              titleLong={itemTemplates.education.dataTitleLong}
              items={this.state.educationItems}
              getInputIdHandler={this.getInputId}
            />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
