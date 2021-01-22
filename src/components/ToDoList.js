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
  };

  delete = (id) => {
    this.setState({
      list : this.state.list.filter(todo => {
        return todo.id !== id
      })
    })
  }


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
          <Button color="primary" > All </Button>
          <Button color="primary" > Active </Button>
          <Button color="primary" > Completed </Button>
          </ButtonGroup>
          <Button color="primary" variant="outlined" style={{marginTop : "0.3em"}}>
            Delete Completed
          </Button>
        </header>
        <ToDoForm addList={this.addToList} />
        <div id="list">
          {this.state.list.map((todo) => {
            return <ToDo key={todo.id} todo={todo} toggle={this.toggleState} delete={this.delete} />;
          })}
        </div>
      </div>
    );
  }
}

export default ToDoList;
