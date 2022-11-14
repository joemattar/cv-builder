import React from "react";
import "./ExperienceSection.css";
import ExperienceItem from "../ExperienceItem/ExperienceItem.js";
import uuid from "react-uuid";

class ExperienceSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: [uuid()] };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayItems = this.displayItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  displayItems() {
    const itemList = this.state.items.map((itemID) => (
      <div className="experience-item" key={itemID}>
        <ExperienceItem
          experienceItemId={itemID}
          onDeleteButtonClickHandler={this.deleteItem}
        />
      </div>
    ));
    return itemList;
  }

  deleteItem(event) {
    const idToDelete = event.target.name;
    const indexToDelete = this.state.items.indexOf(idToDelete);
    this.setState({
      items: this.state.items
        .slice(0, indexToDelete)
        .concat(this.state.items.slice(indexToDelete + 1)),
    });
  }

  addItem() {
    this.setState({
      items: this.state.items.concat([uuid()]),
    });
  }

  render() {
    return (
      <form className="experience-section" onSubmit={this.handleSubmit}>
        <h3>WORK EXPERIENCE</h3>
        {this.displayItems()}
        <button onClick={this.addItem}>ADD EXPERIENCE</button>
      </form>
    );
  }
}

export default ExperienceSection;
