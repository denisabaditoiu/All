import React, { Component } from 'react';
import './App.css';

import {AddTodo} from './components/addtodo/AddTodo';
import {TodoList} from './components/todolist/TodoList';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {};
    this.state.todos = [];
  }
  
  onTodoAdded = (todo) => {
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({
      todos: todos
    });
  }
  
  componentWillMount(){
    const url = 'https://todoapi-cosmincartas.c9users.io/get-all'
    fetch(url).then((res) => {
      return res.json();
    }).then((todos) =>{
      this.setState({
        todos: todos
      })
    })
  }
  render() {
    return (
      <React.Fragment>
        <AddTodo todoAdded={this.onTodoAdded}/>
        <TodoList title="To Do" source={this.state.todos} />
      </React.Fragment>
    );
  }
}

export default App;
