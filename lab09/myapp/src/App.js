import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      todoTodos: [],
      doingTodos: [],
      doneTodos: []
    };
  }
  
  onTodoAdded = (todo) => {
    const newTodos = this.state.todoTodos;
    newTodos.push(todo);
    this.setState({
      todoTodos: newTodos
    });
  }
  
  render() {
    return (
      <div>
        <AddTodo addTodo={this.onTodoAdded} />
        <div className="list-container">
          <TodoList title="To Do" todos={this.state.todoTodos}/>
          <TodoList title="Doing" todos={this.state.doingTodos}/>
          <TodoList title="Done"  todos={this.state.doneTodos}/>
        </div>
      </div>
    );
  }
}

export default App;
