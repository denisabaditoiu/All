import React from 'react';
import axios from 'axios';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            category: '',
            price: 0
        };
    }
    handleChangeProductName = (event) => {
        this.setState({
            productName: event.target.value
        });
    }
    handleChangeProductCategory = (event) => {
        this.setState({
            category: event.target.value
        });
    }
    handleChangeProductPrice = (event) => {
        this.setState({
            price: event.target.value
        });
    }
    
    addProduct = () => {
        const product = this.state;
        axios.post('http://35.158.252.90:8080/api/product', product).then(res => {
            this.props.onProductAdded(product);
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <input 
                    type="text"
                    onChange={this.handleChangeProductName}
                    value={this.state.productName} />
                <select 
                    value={this.state.category}
                    onChange={this.handleChangeProductCategory}>
                    <option>SMARTPHONE</option>
                    <option>PC</option>
                    <option>Laptop</option>
                </select>
                <input
                    type="number"
                    onChange={this.handleChangeProductPrice}
                    value={this.state.price} />
                <button onClick={this.addProduct}>Add</button>
            </div>
        );
    }
}

export default AddProduct;