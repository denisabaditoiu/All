import React, { Component } from 'react';
import './App.css';

import {TodoList} from './TodoList'
import {AddTodo} from './AddTodo'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {};
    this.state.todos = []
    this.state.doing = [{taskName: "ceva"}, {taskName: "altceva"}];
    this.state.done = [{taskName: "ceva1"}, {taskName: "altceva1"}];
  }
  
  onItemAdded = (todo) => {
    this.state.todos.push(todo);
    let todos = this.state.todos;
    this.setState({
      todos: todos
    })
    console.log(this.state.todos)
  }
  
  render() {
    return (
      <React.Fragment>
      <h1>Todo App</h1>
      <AddTodo handleAdd={this.onItemAdded}/>
      <div className="lists-container">
      <TodoList title="To Do..." source={this.state.todos} />
      <TodoList title="Doing..."  source={this.state.doing}/>
      <TodoList title="Done..."  source={this.state.done}/>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
