import React from "react";
import "./PreviewSection.css";
import itemTemplates from "../../templates/itemTemplates.js";
import PreviewItem from "../PreviewItem/PreviewItem.js";

// Define the PreviewSection component
function PreviewSection(props) {
  // Method to display PreviewItem components in the PreviewSection comopnent
  function displayItems() {
    const numberArray = Array(props.itemIDs.length)
      .fill()
      .map((x, i) => i);

    const previewItemList = numberArray.map((i) => (
      <PreviewItem
        data-type={props["data-type"]}
        key={props.itemIDs[i]}
        itemId={props.itemIDs[i]}
        labelIDs={props.labelIDs[i]}
      />
    ));

    return previewItemList;
  }

  // Check if the PreviewSection component has to render h3 or not
  let previewSectionTitle;
  if (itemTemplates[props["data-type"]].dataType !== "personal") {
    previewSectionTitle = (
      <div className="preview-section-title">{props.titleLong}</div>
    );
  }

  return (
    <div className={`preview-section ${props["data-type"]}`}>
      {previewSectionTitle}
      {displayItems()}
    </div>
  );
}

export default PreviewSection;
