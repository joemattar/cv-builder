import React from "react";
import uuid from "react-uuid";
import "./App.css";
import itemTemplates from "./templates/itemTemplates.js";
import Header from "./components/Header/Header.js";
import Section from "./components/Section/Section.js";
import PreviewSection from "./components/PreviewSection/PreviewSection.js";
import Footer from "./components/Footer/Footer.js";

const personalNumberOfPlaceholders = Object.values(
  itemTemplates.personal.placeholders
).length;
const experienceNumberOfPlaceholders = Object.values(
  itemTemplates.experience.placeholders
).length;
const educationNumberOfPlaceholders = Object.values(
  itemTemplates.education.placeholders
).length;

// Define App component
class App extends React.Component {
  constructor(props) {
    super(props);

    // Declare state for parameters holding Item components IDs
    this.state = {
      personalItemIDs: [`id-${uuid()}`],
      personalInputIDs: [this.generateInputIDs(personalNumberOfPlaceholders)],
      experienceItemIDs: [`id-${uuid()}`],
      experienceInputIDs: [
        this.generateInputIDs(experienceNumberOfPlaceholders),
      ],
      educationItemIDs: [`id-${uuid()}`],
      educationInputIDs: [this.generateInputIDs(educationNumberOfPlaceholders)],
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
  // REVIEW ID ADDITION !!!!
  // REVIEW ID ADDITION !!!!
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
  // REVIEW ID DELETION !!!!
  // REVIEW ID DELETION !!!!
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
    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <div className="inputs">
            <Section
              data-type={itemTemplates.personal.dataType}
              titleLong={itemTemplates.personal.dataTitleLong}
              titleShort={itemTemplates.personal.dataTitleShort}
              itemIDs={this.state.personalItemIDs}
              inputIDs={this.state.personalInputIDs}
              getInputIdHandler={this.getInputId}
            />
            <Section
              data-type={itemTemplates.experience.dataType}
              titleLong={itemTemplates.experience.dataTitleLong}
              titleShort={itemTemplates.experience.dataTitleShort}
              itemIDs={this.state.experienceItemIDs}
              inputIDs={this.state.experienceInputIDs}
              addItemHandler={this.addItem}
              deleteItemHandler={this.deleteItem}
              getInputIdHandler={this.getInputId}
            />
            <Section
              data-type={itemTemplates.education.dataType}
              titleLong={itemTemplates.education.dataTitleLong}
              titleShort={itemTemplates.education.dataTitleShort}
              itemIDs={this.state.educationItemIDs}
              inputIDs={this.state.educationInputIDs}
              addItemHandler={this.addItem}
              deleteItemHandler={this.deleteItem}
              getInputIdHandler={this.getInputId}
            />
          </div>
          <div className="output">
            <PreviewSection
              data-type={itemTemplates.personal.dataType}
              titleLong={itemTemplates.personal.dataTitleLong}
              itemIDs={this.state.personalItemIDs}
              labelIDs={this.state.personalInputIDs}
              getInputIdHandler={this.getInputId}
            />
            <PreviewSection
              data-type={itemTemplates.experience.dataType}
              titleLong={itemTemplates.experience.dataTitleLong}
              itemIDs={this.state.experienceItemIDs}
              labelIDs={this.state.experienceInputIDs}
              getInputIdHandler={this.getInputId}
            />
            <PreviewSection
              data-type={itemTemplates.education.dataType}
              titleLong={itemTemplates.education.dataTitleLong}
              itemIDs={this.state.educationItemIDs}
              labelIDs={this.state.educationInputIDs}
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
