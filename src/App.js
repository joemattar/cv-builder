import React from "react";
import uuid from "react-uuid";
import "./App.css";
import itemTemplates from "./templates/itemTemplates.js";
import Header from "./components/Header/Header.js";
import Section from "./components/Section/Section.js";
import PreviewSection from "./components/PreviewSection/PreviewSection.js";
import Footer from "./components/Footer/Footer.js";

// Define App component
class App extends React.Component {
  constructor(props) {
    super(props);

    // Declare state for parameters holding Item components IDs
    this.state = {
      personalItemIDs: [`id-${uuid()}`],
      experienceItemIDs: [`id-${uuid()}`],
      educationItemIDs: [`id-${uuid()}`],
    };

    this.generateInputIDs = this.generateInputIDs.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getInputId = this.getInputId.bind(this);
  }

  // Method to generate an array of unique IDs based on
  // the number of Item components in a Section component data-type
  generateInputIDs(numberOfPlaceholders) {
    let inputIds = [];
    for (let i = 0; i < numberOfPlaceholders; i += 1) {
      inputIds.push(uuid());
    }
    return inputIds;
  }

  // Method to add an Item component ID given a Section component data-type
  addItem(event) {
    if (event.target.getAttribute("data-type") === "experience") {
      this.setState({
        experienceItemIDs: this.state.experienceItemIDs.concat([uuid()]),
      });
    } else if (event.target.getAttribute("data-type") === "education") {
      this.setState({
        educationItemIDs: this.state.educationItemIDs.concat([uuid()]),
      });
    }
  }

  // Method to delete an Input component ID given a Section component data-type
  deleteItem(event) {
    const idToDelete = event.target.name;
    if (event.target.getAttribute("data-type") === "experience") {
      const indexToDelete = this.state.experienceItemIDs.indexOf(idToDelete);
      this.setState({
        experienceItemIDs: this.state.experienceItemIDs
          .slice(0, indexToDelete)
          .concat(this.state.experienceItemIDs.slice(indexToDelete + 1)),
      });
    } else if (event.target.getAttribute("data-type") === "education") {
      const indexToDelete = this.state.educationItemIDs.indexOf(idToDelete);
      this.setState({
        educationItemIDs: this.state.educationItemIDs
          .slice(0, indexToDelete)
          .concat(this.state.educationItemIDs.slice(indexToDelete + 1)),
      });
    }
  }

  // Method that returns an InputText component ID and value on change
  getInputId(event) {
    console.log(event.target.id);
    console.log(event.target.value);
    const targetLabel = document.querySelector(`.id-${event.target.id}`);
    targetLabel.textContent = event.target.value;
  }

  render() {
    const personalNumberOfPlaceholders = Object.values(
      itemTemplates.personal.placeholders
    ).length;
    const experienceNumberOfPlaceholders = Object.values(
      itemTemplates.experience.placeholders
    ).length;
    const educationNumberOfPlaceholders = Object.values(
      itemTemplates.education.placeholders
    ).length;
    // REVIEW ID ASSIGNMENT !!!!
    // REVIEW ID ASSIGNMENT !!!!
    const personalInputIDs = this.generateInputIDs(
      personalNumberOfPlaceholders
    );
    const experienceInputIDs = this.generateInputIDs(
      experienceNumberOfPlaceholders
    );
    const educationInputIDs = this.generateInputIDs(
      educationNumberOfPlaceholders
    );

    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <div className="inputs">
            <Section
              data-type={itemTemplates.personal.dataType}
              titleLong={itemTemplates.personal.dataTitleLong}
              titleShort={itemTemplates.personal.dataTitleShort}
              items={this.state.personalItemIDs}
              // REVIEW ID ASSIGNMENT !!!!
              // REVIEW ID ASSIGNMENT !!!!
              inputIDs={personalInputIDs}
              getInputIdHandler={this.getInputId}
            />
            <Section
              data-type={itemTemplates.experience.dataType}
              titleLong={itemTemplates.experience.dataTitleLong}
              titleShort={itemTemplates.experience.dataTitleShort}
              items={this.state.experienceItemIDs}
              // REVIEW ID ASSIGNMENT !!!!
              // REVIEW ID ASSIGNMENT !!!!
              inputIDs={experienceInputIDs}
              addItemHandler={this.addItem}
              deleteItemHandler={this.deleteItem}
              getInputIdHandler={this.getInputId}
            />
            <Section
              data-type={itemTemplates.education.dataType}
              titleLong={itemTemplates.education.dataTitleLong}
              titleShort={itemTemplates.education.dataTitleShort}
              items={this.state.educationItemIDs}
              // REVIEW ID ASSIGNMENT !!!!
              // REVIEW ID ASSIGNMENT !!!!
              inputIDs={educationInputIDs}
              addItemHandler={this.addItem}
              deleteItemHandler={this.deleteItem}
              getInputIdHandler={this.getInputId}
            />
          </div>
          <div className="output">
            <PreviewSection
              data-type={itemTemplates.personal.dataType}
              titleLong={itemTemplates.personal.dataTitleLong}
              items={this.state.personalItemIDs}
              // REVIEW ID ASSIGNMENT !!!!
              // REVIEW ID ASSIGNMENT !!!!
              labelIDs={personalInputIDs}
              getInputIdHandler={this.getInputId}
            />
            <PreviewSection
              data-type={itemTemplates.experience.dataType}
              titleLong={itemTemplates.experience.dataTitleLong}
              items={this.state.experienceItemIDs}
              // REVIEW ID ASSIGNMENT !!!!
              // REVIEW ID ASSIGNMENT !!!!
              labelIDs={experienceInputIDs}
              getInputIdHandler={this.getInputId}
            />
            <PreviewSection
              data-type={itemTemplates.education.dataType}
              titleLong={itemTemplates.education.dataTitleLong}
              items={this.state.educationItemIDs}
              // REVIEW ID ASSIGNMENT !!!!
              // REVIEW ID ASSIGNMENT !!!!
              labelIDs={educationInputIDs}
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
