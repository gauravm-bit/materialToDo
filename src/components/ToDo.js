import React from "react";
 
const ToDo = (props) => {
  
  return (
    <div
      onClick={() => props.toggle(props.todo.id)}
      style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }}
    >
      {props.todo.text}
     
    </div>
  );
};

export default ToDo;
