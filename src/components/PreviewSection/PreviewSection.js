import React from "react";
import "./PreviewSection.css";
import itemTemplates from "../../templates/itemTemplates.js";
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
    // Check if the PreviewSection component has to render h3 or not
    let previewSectionTitle;
    if (itemTemplates[this.props["data-type"]].dataType !== "personal") {
      previewSectionTitle = <h3>{this.props.titleLong}</h3>;
    }

    return (
      <div className={`preview-section ${this.props["data-type"]}`}>
        {previewSectionTitle}
        {this.displayItems()}
      </div>
    );
  }
}

export default PreviewSection;
