import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        let items = this.props.todos.map((todo, index) => <div key={index}>{todo.taskName}</div>);
        console.log(items);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className="items-container">
                    {items}
                </div>
            </div>
        )
    }
}

export default TodoList;