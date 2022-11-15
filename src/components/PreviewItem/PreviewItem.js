import React from "react";
import "./PreviewItem.css";

class PreviewItem extends React.Component {
  constructor(props) {
    super(props);

    this.displayLabels = this.displayLabels.bind(this);
  }

  // REVIEW ID ASSIGNMENT !!!!
  // REVIEW ID ASSIGNMENT !!!!
  displayLabels() {
    const previewLabelsList = this.props.labelIDs.map((labelID) => (
      <label
        // key={labelID}
        className={"id-".concat(labelID)}
      />
    ));
    return previewLabelsList;
  }

  render() {
    return <div className="preview-item">{this.displayLabels()}</div>;
  }
}

export default PreviewItem;
