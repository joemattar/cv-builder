import React from "react";
import "./ExperienceItem.css";
import InputText from "../InputText/InputText.js";

class ExperienceItem extends React.Component {
  render() {
    return (
      <div className="experience-item">
        <InputText name="organization" placeholder="Organization" />
        <InputText name="role" placeholder="Role" />
        <InputText name="location" placeholder="Organization City, Country" />
        <InputText name="fromTime" placeholder="From" />
        <InputText name="toTime" placeholder="To" />
        <InputText name="description" placeholder="Role Description" />
      </div>
    );
  }
}

export default ExperienceItem;
