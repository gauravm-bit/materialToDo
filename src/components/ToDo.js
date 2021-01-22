import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from '@material-ui/icons/Cancel';
import Tooltip from '@material-ui/core/Tooltip';

const ToDo = (props) => {
  
  return (
    <div style={{ display:'flex' }}>
       <div
      onClick={() => props.toggle(props.todo.id)}
      style={{  fontSize: '35px', textDecoration: props.todo.isCompleted ? "line-through" : "" }}
    >
      {props.todo.text} 
    </div>
    <Tooltip title="Delete" placement="right" arrow>
    <IconButton onClick={() => props.delete(props.todo.id)} > <CancelIcon/></IconButton>
    </Tooltip>
    </div>
  );
};

export default ToDo;
