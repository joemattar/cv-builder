import React from "react";
import "./Section.css";
import Item from "../Item/Item.js";
import uuid from "react-uuid";

// Warning personal section does not have buttons
class Section extends React.Component {
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
      <div className="item" key={itemID}>
        <Item itemId={itemID} onDeleteButtonClickHandler={this.deleteItem} />
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
      <form className="section" onSubmit={this.handleSubmit}>
        <h3>WORK EXPERIENCE</h3>
        {this.displayItems()}
        <button onClick={this.addItem}>ADD EXPERIENCE</button>
      </form>
    );
  }
}

export default Section;
