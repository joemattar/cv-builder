import React from "react";
import "./InputText.css";

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <input
        type="text"
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={this.handleChange}
      ></input>
    );
  }
}

export default InputText;
