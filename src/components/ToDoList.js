import React from 'react';
import ToDoForm from './ToDoForm'
import './ToDoList.css';

class ToDoList extends React.Component{
    render(){
        return<div>
            <header id="heading">
            <h1>To-Do List</h1>
            </header>
            <ToDoForm />
        </div>
    }
}

export default ToDoList;