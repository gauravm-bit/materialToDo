import React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import "./ToDoForm.css";
const shortid = require("shortid");

class ToDoForm extends React.Component {
  state = {
    value: { text: "" },
  };

  handleChange = (event) => {
    if (event.target.value !== "") {
      this.setState({
        value: {
          text: event.target.value,
          id: shortid.generate(),
          isCompleted: false,
        },
      });
    }
  };

  addList = () => {
    if (this.state.value.text.trim() !== "") {
      this.props.addList(this.state.value);
    }
    this.setState({
      value: { text: "" },
    });
  };

  render() {
    return (
      <div className="form">
        <TextField
          id="standard"
          placeholder="Enter here"
          rowsMax={4}
          value={this.state.value.text}
          onChange={this.handleChange}
          style={{ width: "40%" }}
        />
        <IconButton
          color="primary"
          aria-label="add button"
          onClick={this.addList}
        >
          +
        </IconButton>
      </div>
    );
  }
}

export default ToDoForm;
