import React from 'react';

const ToDo = props =>{
    console.log(props);
    return <div >
        {props.todo.text}
    </div>
}

export default ToDo;