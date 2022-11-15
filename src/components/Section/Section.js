import React from "react";
import "./Section.css";
import itemTemplates from "../../templates/itemTemplates.js";
import Item from "../Item/Item.js";

class Section extends React.Component {
  constructor(props) {
    super(props);

    this.displayItems = this.displayItems.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  displayItems() {
    const itemList = this.props.items.map((itemID) => (
      <div className="item" key={itemID}>
        <Item
          data-type={this.props["data-type"]}
          itemId={itemID}
          deleteItemHandler={this.props.deleteItemHandler}
        />
      </div>
    ));
    return itemList;
  }

  render() {
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
