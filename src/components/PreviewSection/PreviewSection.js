import React from "react";
import "./PreviewSection.css";

class PreviewSection extends React.Component {
  constructor(props) {
    super(props);

    this.displayItems = this.displayItems.bind(this);
  }

  displayItems() {
    const previewItemList = this.props.items.map((itemID) => (
      <div className="preview-item" key={itemID}>
        {/* <Item
          data-type={this.props["data-type"]}
          itemId={itemID}
          deleteItemHandler={this.props.deleteItemHandler}
          getInputIdHandler={this.props.getInputIdHandler}
        /> */}
      </div>
    ));
    return previewItemList;
  }

  render() {
    return (
      <div className="preview-section">
        <h3>{this.props.titleLong}</h3>
        {this.displayItems()}
      </div>
    );
  }
}

export default PreviewSection;
