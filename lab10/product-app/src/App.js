import React, { Component } from 'react';

import AddProduct from './AddProduct';
import ProductList from './ProductList';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    };
  }
  
  onProductAdded = (product) => {
    const products = this.state.products;
    products.push(product);
    this.setState({
      products: products
    });
  }
  
  componentDidMount = () => {
    axios.get('http://35.158.252.90:8080/api/product').then(products => {
      this.setState({
        products: products.data
      })
    })
  }
  
  render() {
    return (
      <div className="App">
          <AddProduct onProductAdded={this.onProductAdded}/>
          <ProductList products={this.state.products}/>
      </div>
    );
  }
}

export default App;
