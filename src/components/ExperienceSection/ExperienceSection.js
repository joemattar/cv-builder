import React from "react";
import "./ExperienceSection.css";
import ExperienceItem from "../ExperienceItem/ExperienceItem.js";

class ExperienceSection extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="experience-section" onSubmit={this.handleSubmit}>
        <h3>WORK EXPERIENCE</h3>
        <ExperienceItem />
        <button>ADD EXPERIENCE</button>
      </form>
    );
  }
}

export default ExperienceSection;
