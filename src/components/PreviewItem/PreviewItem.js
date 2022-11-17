import React from "react";
import "./PreviewItem.css";
import itemTemplates from "../../templates/itemTemplates.js";

// Define PreviewItem component
function PreviewItem(props) {
  // Method to display the label elements in the Item component
  function displayLabels() {
    const numberArray = Array(props.labelIDs.length)
      .fill()
      .map((x, i) => i);

    const placeholderClassList = Object.values(
      itemTemplates[props["data-type"]].placeholderClasses
    );

    const previewLabelsList = numberArray.map((i) => (
      <label
        key={props.labelIDs[i]}
        className={`preview-label ${placeholderClassList[i]} ${props.labelIDs[i]}`}
      />
    ));
    return previewLabelsList;
  }

  let timeSeparator;
  if (
    props["data-type"] === "experience" ||
    props["data-type"] === "education"
  ) {
    timeSeparator = <label className="preview-label separator">|</label>;
  }
  return (
    <div className="preview-item">
      {displayLabels()}
      {timeSeparator}
    </div>
  );
}

export default PreviewItem;
