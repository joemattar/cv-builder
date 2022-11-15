import React from "react";
import "./Item.css";
import itemTemplates from "../../templates/itemTemplates.js";
import InputText from "../InputText/InputText.js";
import uuid from "react-uuid";

// Define Experience Item component
class Item extends React.Component {
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
        <InputText id={uuid()} placeholder="Organization" />
        <InputText id={uuid()} placeholder="Role" />
        <InputText id={uuid()} placeholder="Organization City, Country" />
        <InputText id={uuid()} placeholder="From" />
        <InputText id={uuid()} placeholder="To" />
        <InputText id={uuid()} placeholder="Role Description" />
        {button}
      </div>
    );
  }
}

export default Item;
