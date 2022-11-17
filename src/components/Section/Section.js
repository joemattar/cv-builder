import React from "react";
import "./Section.css";
import itemTemplates from "../../templates/itemTemplates.js";
import Item from "../Item/Item.js";

// Define Section component
function Section(props) {
  // Method to prevent form submittal on buttons click
  function handleSubmit(event) {
    event.preventDefault();
  }

  // Method to display Item components in the Section comopnent
  function displayItems() {
    const numberArray = Array(props.itemIDs.length)
      .fill()
      .map((x, i) => i);

    const itemList = numberArray.map((i) => (
      <Item
        data-type={props["data-type"]}
        key={props.itemIDs[i]}
        itemId={props.itemIDs[i]}
        inputIDs={props.inputIDs[i]}
        deleteItemHandler={props.deleteItemHandler}
        getInputIdHandler={props.getInputIdHandler}
      />
    ));

    return itemList;
  }

  // Check if the Section component has to render buttons or not
  let button;
  if (itemTemplates[props["data-type"]].dataHasButtons === true) {
    button = (
      <button onClick={props.addItemHandler} data-type={props["data-type"]}>
        Add {props.titleShort}
      </button>
    );
  }

  return (
    <form className="section" onSubmit={handleSubmit}>
      <h3>{props.titleLong}</h3>
      {displayItems()}
      {button}
    </form>
  );
}

export default Section;
