import React from "react";
import "./Item.css";
import InputText from "../InputText/InputText.js";
import uuid from "react-uuid";

// Define Experience Item component
class Item extends React.Component {
  render() {
    return (
      <div className="item" id={this.props.itemId}>
        <InputText id={uuid()} placeholder="Organization" />
        <InputText id={uuid()} placeholder="Role" />
        <InputText id={uuid()} placeholder="Organization City, Country" />
        <InputText id={uuid()} placeholder="From" />
        <InputText id={uuid()} placeholder="To" />
        <InputText id={uuid()} placeholder="Role Description" />
        <button
          name={this.props.itemId}
          onClick={this.props.onDeleteButtonClickHandler}
        >
          DELETE
        </button>
      </div>
    );
  }
}

export default Item;
