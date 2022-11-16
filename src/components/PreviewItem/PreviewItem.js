import React from "react";
import "./PreviewItem.css";
import itemTemplates from "../../templates/itemTemplates.js";

// Define PreviewItem component
class PreviewItem extends React.Component {
  constructor(props) {
    super(props);

    this.displayLabels = this.displayLabels.bind(this);
  }

  // Method to display the label elements in the Item component
  displayLabels() {
    const numberArray = Array(this.props.labelIDs.length)
      .fill()
      .map((x, i) => i);

    const placeholderClassList = Object.values(
      itemTemplates[this.props["data-type"]].placeholderClasses
    );

    const previewLabelsList = numberArray.map((i) => (
      <label
        key={this.props.labelIDs[i]}
        className={`preview-label ${placeholderClassList[i]} ${this.props.labelIDs[i]}`}
      />
    ));
    return previewLabelsList;
  }

  render() {
    return <div className="preview-item">{this.displayLabels()}</div>;
  }
}

export default PreviewItem;
