import React from "react";
import "./Item.css";
import itemTemplates from "../../templates/itemTemplates.js";
import InputText from "../InputText/InputText.js";

// Define Item component
class Item extends React.Component {
  constructor(props) {
    super(props);

    this.displayInputs = this.displayInputs.bind(this);
  }

  // Method to display the Input components in the Item component
  displayInputs() {
    const numberArray = Array(this.props.inputIDs.length)
      .fill()
      .map((x, i) => i);

    const placeholderList = Object.values(
      itemTemplates[this.props["data-type"]].placeholders
    );

    const inputList = numberArray.map((i) => (
      <InputText
        key={this.props.inputIDs[i]}
        id={this.props.inputIDs[i]}
        placeholder={placeholderList[i]}
        getInputIdHandler={this.props.getInputIdHandler}
      />
    ));

    return inputList;
  }

  render() {
    // Check if the Input component has to render buttons or not
    let button;
    if (itemTemplates[this.props["data-type"]].dataHasButtons === true) {
      button = (
        <button
          data-type={this.props["data-type"]}
          name={this.props.itemId}
          onClick={this.props.deleteItemHandler}
        >
          Delete
        </button>
      );
    }

    return (
      <div className="item" id={this.props.itemId}>
        {this.displayInputs()}
        {button}
      </div>
    );
  }
}

export default Item;
