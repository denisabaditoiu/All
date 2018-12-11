import React from 'react';
import axios from 'axios';

export class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.state.taskName = ""
        this.state.priority = ""
        this.state.duration = 0;
    }
    
    
    handleChangeTaskName = (event) => {
        this.setState({
            taskName: event.target.value
        })
    }
    
    handleChangePriority = (event) => {
        this.setState({
            priority: event.target.value
        })
    }
    
    handleChangeDuration = (event) => {
        this.setState({
            duration: event.target.value
        })
    }
    
    handleAddClick = () => {
        let todo = {
            taskName: this.state.taskName,
            priority: this.state.priority,
            duration: this.state.duration
        }
        axios.post('https://todoapi-cosmincartas.c9users.io/add-todo', todo).then((res) => {
            if(res.status === 200){
                this.props.todoAdded(todo)
            }
        }).catch((err) =>{
            console.log(err)
        })
    }
        
    render(){
        return(
            <div>
                <h1>Add Todo</h1>
                <input type="text" placeholder="Task Name" 
                    onChange={this.handleChangeTaskName}
                    value={this.state.taskName} />
                <input type="text" placeholder="Priority" 
                    onChange={this.handleChangePriority}
                    value={this.state.priority} />
                <input type="number" value={this.state.duration}
                    onChange={this.handleChangeDuration} />
                <button onClick={this.handleAddClick}>Add Todo</button>
            </div>
            );
    }
}