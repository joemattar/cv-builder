import React from "react";
import "./Item.css";
import itemTemplates from "../../templates/itemTemplates.js";
import InputText from "../InputText/InputText.js";

// Define Item component
function Item(props) {
  // Method to display the Input components in the Item component
  function displayInputs() {
    const numberArray = Array(props.inputIDs.length)
      .fill()
      .map((x, i) => i);

    const placeholderList = Object.values(
      itemTemplates[props["data-type"]].placeholders
    );

    const inputList = numberArray.map((i) => (
      <InputText
        key={props.inputIDs[i]}
        id={props.inputIDs[i]}
        placeholder={placeholderList[i]}
        getInputIdHandler={props.getInputIdHandler}
      />
    ));

    return inputList;
  }

  // Check if the Input component has to render buttons or not
  let button;
  if (itemTemplates[props["data-type"]].dataHasButtons === true) {
    button = (
      <button
        data-type={props["data-type"]}
        name={props.itemId}
        onClick={props.deleteItemHandler}
      >
        Delete
      </button>
    );
  }

  return (
    <div className="item" id={props.itemId}>
      {displayInputs()}
      {button}
    </div>
  );
}

export default Item;
