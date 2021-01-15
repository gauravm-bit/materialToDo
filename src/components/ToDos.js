import React from 'react';
import ToDo from './ToDo'

class ToDos extends React.Component{
    render(){
    return<div>
        {this.props.list.map((todo) => {
            return <div>
                <ToDo todo = {todo}
                      key = {todo.id}
                />
                </div>
        })}
    </div>
    }
}

export default ToDos;