import React from "react";
import "./PreviewSection.css";
import PreviewItem from "../PreviewItem/PreviewItem.js";

// Define the PreviewSection component
class PreviewSection extends React.Component {
  constructor(props) {
    super(props);

    this.displayItems = this.displayItems.bind(this);
  }

  // REVIEW ID ASSIGNMENT !!!!
  // REVIEW ID ASSIGNMENT !!!!
  // Method to display PreviewItem components in the PreviewSection comopnent
  displayItems() {
    const previewItemList = this.props.items.map((itemID) => (
      <PreviewItem
        // key={uuid()}
        data-type={this.props["data-type"]}
        itemId={itemID}
        labelIDs={this.props.labelIDs}
      />
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
