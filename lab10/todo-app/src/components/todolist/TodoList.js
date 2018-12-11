import React from 'react';

export class TodoList extends React.Component {
    constructor(props){
        super(props);
        
    }
    
    render(){
        let items = this.props.source.map((todo, index) =>{
            return <div key={index}>{todo.taskName}</div>
        })
        return(
            <div>
                <h1>{this.props.title}</h1>
                <div>
                {items}
                </div>
            </div>
            );
    }
}