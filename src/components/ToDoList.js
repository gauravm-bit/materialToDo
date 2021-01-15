import React from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./ToDoList.css";

class ToDoList extends React.Component {
  state = {
    list: [],
  };

  addToList = (value) => {
    this.setState(
      {
        list: [value, ...this.state.list],
      },
      () => {
        console.log(this.state.list);
      }
    );
  };

  toggleState = (id) => {
    let newList = [...this.state.list];
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === id) {
        newList[i].isCompleted = !newList[i].isCompleted;
      }
    }
    this.setState({
      list: [...newList],
    });
    console.log(this.state.list);
  };

  render() {
    return (
      <div>
        <header id="heading">
          <h1>To-Do List</h1>
          <p>
            No of active todos :{" "}
            {this.state.list.filter((todo) => todo.isCompleted !== true).length}
          </p>
          <ButtonGroup>
          <Button color="primary"> All</Button>
          <Button color="primary">Completed</Button>
          <Button color="primary">Delete Completed</Button>
          </ButtonGroup>
        </header>

        <ToDoForm addList={this.addToList} />
        <div id="list">
          {this.state.list.map((todo) => {
            return <ToDo key={todo.id} todo={todo} toggle={this.toggleState} />;
          })}
        </div>
      </div>
    );
  }
}

export default ToDoList;
