import React, { Component } from 'react';
import './AddTodo.css';

class AddTodo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            priority: 'LOW',
            duration: 0
        };
    }
    
    clearFields = () => {
        this.setState({
            taskName: '',
            priority: 'LOW',
            duration: 0
        });
    }
    
    handleChangePriority = (event) => {
        this.setState({priority: event.target.value});
    }
    
    handleChangeTaskName = (event) => {
        this.setState({taskName: event.target.value});
    }
    
    handleChangeDuration = (event) => {
        this.setState({duration: event.target.value});
    }
    
    handleAddTodo = (event) => {
        const todo = Object.assign({}, this.state);
        this.props.addTodo(todo);
        this.clearFields();
    }
    
    render() {
        return (
            <div className="container">
                <h1>Add ToDo</h1>
                <input placeholder="Task Name" value={this.state.taskName} onChange={this.handleChangeTaskName}/>
                <select value={this.state.priority} onChange={this.handleChangePriority}>
                    <option>LOW</option>
                    <option>MEDIUM</option>
                    <option>HIGH</option>
                </select>
                <input placeholder="Duration" type="number" value={this.state.duration} onChange={this.handleChangeDuration}/>
                <button onClick={this.handleAddTodo}>Add</button>
            </div>
        )
    }
}

export default AddTodo;