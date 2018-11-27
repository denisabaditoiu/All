import React from 'react';

export class AddTodo extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            taskName: "",
            priority: "",
            duration: 0
        };
        
        //this.handleChangeTaskName = this.handleChangeTaskName.bind(this);
    }
    
    clearFields = () => {
        this.setState({
           taskName: " ",
           priority: " ",
           duration: 0
        })
    }
    
    handleChangeTaskName = (e) => {
        this.setState({
           taskName: e.target.value
        });
        
    }
    
    handleChangePriority = (e) => {
        this.setState({
            priority: e.target.value
        });
        
    }
    
    handleChangeDuration = (e) => {
        this.setState({
            duration: e.target.value
        });
        
    }
    
    onItemAdded = () => {
      let todo = {
          taskName: this.state.taskName,
          priority: this.state.priority,
          duration: this.state.duration
      }
      this.props.handleAdd(todo);
      this.clearFields()
    }
    
    render(){
        return (
            <React.Fragment>
                <div>
                    <h1>Add Todo </h1>
                    <div>
                        <input type="text" placeholder="Task Name" value={this.state.taskName} onChange={this.handleChangeTaskName} />
                        <input type="text" placeholder="Priority" value={this.state.priority} onChange={this.handleChangePriority}/>
                        <input type="number" value={this.state.duration}  onChange={this.handleChangeDuration}/>
                        <button onClick={this.onItemAdded}>Add Todo</button>
                    </div>
                </div>
            </React.Fragment>
            )
    }
}