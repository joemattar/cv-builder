import React from "react";
import "./PreviewSection.css";
import PreviewItem from "../PreviewItem/PreviewItem.js";

class PreviewSection extends React.Component {
  constructor(props) {
    super(props);

    this.displayItems = this.displayItems.bind(this);
  }

  displayItems() {
    const previewItemList = this.props.items.map((itemID) => (
      <div className={["preview-item", itemID].join(" ")} key={itemID}>
        <PreviewItem
          data-type={this.props["data-type"]}
          itemId={itemID}
          labelIDs={this.props.labelIDs}
        />
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
