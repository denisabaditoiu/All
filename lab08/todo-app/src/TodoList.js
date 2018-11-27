import React from 'react';
import './TodoList.css'

export class TodoList extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            source: []
        };
    }
    
    render(){
        let items = this.props.source.map((item, index) => 
            <div key={index}>{item.taskName}</div>
        );
        return (
            <React.Fragment>
            <div>
                <h1>{this.props.title}</h1>
                <div className="items-container">
                {items}
                </div>
            </div>
            </React.Fragment>
            )    
    }
    
}