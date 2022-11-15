import React from "react";
import "./Item.css";
import itemTemplates from "../../templates/itemTemplates.js";
import InputText from "../InputText/InputText.js";
import uuid from "react-uuid";

// Define Experience Item component
class Item extends React.Component {
  constructor(props) {
    super(props);

    this.displayInputs = this.displayInputs.bind(this);
  }

  // REVIEW KEY !!!
  displayInputs() {
    const placeholderList = Object.values(
      itemTemplates[this.props["data-type"]].placeholders
    );
    const inputList = placeholderList.map((placeholder) => (
      <InputText
        id={uuid()}
        placeholder={placeholder}
        getInputIdHandler={this.props.getInputIdHandler}
      />
    ));
    return inputList;
  }

  render() {
    let button;
    if (itemTemplates[this.props["data-type"]].dataHasButtons === true) {
      button = (
        <button
          data-type={this.props["data-type"]}
          name={this.props.itemId}
          onClick={this.props.deleteItemHandler}
        >
          DELETE
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
