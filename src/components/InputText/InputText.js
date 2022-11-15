import React from "react";
import "./InputText.css";

// Define Text Input component
class InputText extends React.Component {
  constructor(props) {
    super(props);
    // Set initial value to ""
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  // Function to handle typing, deleting in input
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.getInputIdHandler(event);
  }

  render() {
    return (
      <input
        type="text"
        id={this.props.id}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={this.handleChange}
      ></input>
    );
  }
}

export default InputText;
