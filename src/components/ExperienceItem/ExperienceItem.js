import React from "react";
import "./ExperienceItem.css";
import InputText from "../InputText/InputText.js";
import uuid from "react-uuid";

// Define Experience Item component
class ExperienceItem extends React.Component {
  render() {
    return (
      <div className="experience-item" id={this.props.experienceItemId}>
        <InputText id={uuid()} placeholder="Organization" />
        <InputText id={uuid()} placeholder="Role" />
        <InputText id={uuid()} placeholder="Organization City, Country" />
        <InputText id={uuid()} placeholder="From" />
        <InputText id={uuid()} placeholder="To" />
        <InputText id={uuid()} placeholder="Role Description" />
      </div>
    );
  }
}

export default ExperienceItem;
