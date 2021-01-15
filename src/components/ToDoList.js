import React from 'react';
import ToDoForm from './ToDoForm'
import ToDos from './ToDos'
import './ToDoList.css';

class ToDoList extends React.Component{

    state = {
        list : []
    }

     addToList = (value) => {
       this.setState({
           list :  [value,...this.state.list]        
       },()=>{console.log(this.state.list)}) 
    }
    
    render(){
        return<div>
            <header id="heading">
            <h1>To-Do List</h1>
            </header>
            <ToDoForm  addList = {this.addToList} 
            />
            <div id="list">
            <ToDos list = {this.state.list} />           
             <p>No of active todos:{this.state.list.length}</p>
            </div>
        </div>
    }
}

export default ToDoList;