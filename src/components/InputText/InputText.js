import React from "react";
import "./InputText.css";

// Define Text Input component
class InputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  // Function to handle typing, deleting in input
  // Also triggers getInputHandler function that returns
  // id and value back up to the App component
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
