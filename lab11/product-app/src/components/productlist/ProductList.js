import React from 'react';

export class ProductList extends React.Component {
    
    transformItems = () => {
        switch(this.props.title){
            case "Product List":
                return this.props.source.map((element, index) => {
                    return <div key={index}>{element.name}</div>
                })
            case "Product Categories":
                return this.props.source.map((element, index) => {
                    return <div key={index}>{element.name} : {element.category}</div>
                })
            default:
                return this.props.source.map((element, index) => {
                    return <div key={index}>{element.name}</div>
                })
        }
         
    }
    
    render(){
        let items = this.transformItems();
        
        return (
            <div>
            <h1>{this.props.title}</h1>
                {items}
            </div>
            );
    }    
}