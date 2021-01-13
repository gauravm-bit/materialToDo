import React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import "./ToDoForm.css";

class ToDoForm extends React.Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div className="form">
        <TextField
          id="standard-multiline-flexible"
          placeholder="Enter here"
          multiline
          rowsMax={4}
          value={this.state.value}
          onChange={this.handleChange}
          style={{ width: '40%' }}
        />
        <IconButton color="primary" aria-label="add to shopping cart">
          +
        </IconButton>
      </div>
    );
  }
}

export default ToDoForm;
