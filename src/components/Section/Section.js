import React from "react";
import "./Section.css";
import itemTemplates from "../../templates/itemTemplates.js";
import Item from "../Item/Item.js";

// Define Section component
class Section extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayItems = this.displayItems.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  // Method to display Item components in the Section comopnent
  displayItems() {
    const numberArray = Array(this.props.itemIDs.length)
      .fill()
      .map((x, i) => i);

    const itemList = numberArray.map((i) => (
      <Item
        data-type={this.props["data-type"]}
        key={this.props.itemIDs[i]}
        itemId={this.props.itemIDs[i]}
        inputIDs={this.props.inputIDs[i]}
        deleteItemHandler={this.props.deleteItemHandler}
        getInputIdHandler={this.props.getInputIdHandler}
      />
    ));

    return itemList;
  }

  render() {
    // Check if the Section component has to render buttons or not
    let button;
    if (itemTemplates[this.props["data-type"]].dataHasButtons === true) {
      button = (
        <button
          onClick={this.props.addItemHandler}
          data-type={this.props["data-type"]}
        >
          ADD {this.props.titleShort}
        </button>
      );
    }

    return (
      <form className="section" onSubmit={this.handleSubmit}>
        <h3>{this.props.titleLong}</h3>
        {this.displayItems()}
        {button}
      </form>
    );
  }
}

export default Section;
