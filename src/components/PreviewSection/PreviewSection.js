import React from "react";
import "./PreviewSection.css";
import PreviewItem from "../PreviewItem/PreviewItem.js";

// Define the PreviewSection component
class PreviewSection extends React.Component {
  constructor(props) {
    super(props);

    this.displayItems = this.displayItems.bind(this);
  }

  // Method to display PreviewItem components in the PreviewSection comopnent
  displayItems() {
    const numberArray = Array(this.props.itemIDs.length)
      .fill()
      .map((x, i) => i);

    const previewItemList = numberArray.map((i) => (
      <PreviewItem
        data-type={this.props["data-type"]}
        key={this.props.itemIDs[i]}
        itemId={this.props.itemIDs[i]}
        labelIDs={this.props.labelIDs[i]}
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
