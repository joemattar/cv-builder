import React, { useState } from "react";
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
function App(props) {
  // Declare state for parameters holding Item components IDs
  const [personalItemIDs, setPersonalItemIDs] = useState([`id-${uuid()}`]);
  const [personalInputIDs, setPersonalInputIDs] = useState([
    this.generateInputIDs(personalNumberOfPlaceholders),
  ]);
  const [experienceItemIDs, setExperienceItemIDs] = useState([`id-${uuid()}`]);
  const [experienceInputIDs, setExperienceInputIDs] = useState([
    this.generateInputIDs(experienceNumberOfPlaceholders),
  ]);
  const [educationItemIDs, setEducationItemIDs] = useState([`id-${uuid()}`]);
  const [educationInputIDs, setEducationInputIDs] = useState([
    this.generateInputIDs(educationNumberOfPlaceholders),
  ]);

  // Method to generate an array of unique IDs based on
  // the number of Item components in a Section component data-type
  function generateInputIDs(numberOfPlaceholders) {
    let inputIds = [];
    for (let i = 0; i < numberOfPlaceholders; i += 1) {
      inputIds.push(`id-${uuid()}`);
    }
    return inputIds;
  }

  // Method to add an Item component ID given a Section component data-type
  function addItem(event) {
    if (event.target.getAttribute("data-type") === "experience") {
      setExperienceItemIDs(experienceItemIDs.concat([uuid()]));
      setExperienceInputIDs(
        experienceInputIDs.concat([
          generateInputIDs(experienceNumberOfPlaceholders),
        ])
      );
    } else if (event.target.getAttribute("data-type") === "education") {
      setEducationItemIDs(educationItemIDs.concat([uuid()]));
      setEducationInputIDs(
        educationInputIDs.concat([
          generateInputIDs(educationNumberOfPlaceholders),
        ])
      );
    }
  }

  // Method to delete an Input component ID given a Section component data-type
  function deleteItem(event) {
    const idToDelete = event.target.name;
    if (event.target.getAttribute("data-type") === "experience") {
      const indexToDelete = experienceItemIDs.indexOf(idToDelete);
      setExperienceItemIDs(
        experienceItemIDs
          .slice(0, indexToDelete)
          .concat(this.state.experienceItemIDs.slice(indexToDelete + 1))
      );
      setExperienceInputIDs(
        experienceInputIDs
          .slice(0, indexToDelete)
          .concat(this.state.experienceInputIDs.slice(indexToDelete + 1))
      );
    } else if (event.target.getAttribute("data-type") === "education") {
      const indexToDelete = educationItemIDs.indexOf(idToDelete);
      setEducationItemIDs(
        educationItemIDs
          .slice(0, indexToDelete)
          .concat(this.state.educationItemIDs.slice(indexToDelete + 1))
      );
      setEducationInputIDs(
        educationInputIDs
          .slice(0, indexToDelete)
          .concat(this.state.educationInputIDs.slice(indexToDelete + 1))
      );
    }
  }

  // Method that returns an InputText component ID and value on change
  function getInputId(event) {
    const targetLabel = document.querySelector(`.${event.target.id}`);
    targetLabel.textContent = event.target.value;
  }

  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <div className="inputs">
          <Section
            data-type={itemTemplates.personal.dataType}
            titleLong={itemTemplates.personal.dataTitleLong}
            titleShort={itemTemplates.personal.dataTitleShort}
            itemIDs={personalItemIDs}
            inputIDs={personalInputIDs}
            getInputIdHandler={getInputId}
          />
          <Section
            data-type={itemTemplates.experience.dataType}
            titleLong={itemTemplates.experience.dataTitleLong}
            titleShort={itemTemplates.experience.dataTitleShort}
            itemIDs={experienceItemIDs}
            inputIDs={experienceInputIDs}
            addItemHandler={addItem}
            deleteItemHandler={deleteItem}
            getInputIdHandler={getInputId}
          />
          <Section
            data-type={itemTemplates.education.dataType}
            titleLong={itemTemplates.education.dataTitleLong}
            titleShort={itemTemplates.education.dataTitleShort}
            itemIDs={educationItemIDs}
            inputIDs={educationInputIDs}
            addItemHandler={addItem}
            deleteItemHandler={deleteItem}
            getInputIdHandler={getInputId}
          />
        </div>
        <div className="output">
          <PreviewSection
            data-type={itemTemplates.personal.dataType}
            titleLong={itemTemplates.personal.dataTitleLong}
            itemIDs={personalItemIDs}
            labelIDs={personalInputIDs}
            getInputIdHandler={getInputId}
          />
          <PreviewSection
            data-type={itemTemplates.experience.dataType}
            titleLong={itemTemplates.experience.dataTitleLong}
            itemIDs={experienceItemIDs}
            labelIDs={experienceInputIDs}
            getInputIdHandler={getInputId}
          />
          <PreviewSection
            data-type={itemTemplates.education.dataType}
            titleLong={itemTemplates.education.dataTitleLong}
            itemIDs={educationItemIDs}
            labelIDs={educationInputIDs}
            getInputIdHandler={getInputId}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
