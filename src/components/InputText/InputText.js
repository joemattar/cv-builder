import React, { useState } from "react";
import "./InputText.css";

// Define Text Input component
function InputText(props) {
  const [value, setValue] = useState("");

  // Function to handle typing, deleting in input
  // Also triggers getInputHandler function that returns
  // id and value back up to the App component
  function handleChange(event) {
    setValue(event.target.value);
    props.getInputIdHandler(event);
  }

  return (
    <input
      type="text"
      id={props.id}
      placeholder={props.placeholder}
      value={value}
      onChange={handleChange}
    ></input>
  );
}

export default InputText;
