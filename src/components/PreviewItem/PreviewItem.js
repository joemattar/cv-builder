import React from "react";
import "./PreviewItem.css";

// Define PreviewItem component
class PreviewItem extends React.Component {
  constructor(props) {
    super(props);

    this.displayLabels = this.displayLabels.bind(this);
  }

  // Method to display the label elements in the Item component
  displayLabels() {
    const previewLabelsList = this.props.labelIDs.map((labelID) => (
      <label key={labelID} className={"preview-label ".concat(labelID)} />
    ));
    return previewLabelsList;
  }

  render() {
    return <div className="preview-item">{this.displayLabels()}</div>;
  }
}

export default PreviewItem;
