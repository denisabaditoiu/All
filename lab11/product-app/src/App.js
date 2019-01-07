import React, { Component } from 'react';
import './App.css';
import {ProductList} from './components/productlist/ProductList';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {};
    this.state.productList = [];
  }
  
  async componentDidMount(){
    let productList = await this.getAllProducts();
    this.setState({
      productList: productList
    })
    console.log(this.state);
  }
  
  getAllProducts = async () => {
    let response = await fetch('https://productapi-cosmincartas.c9users.io/get-all')
    let products = await response.json();
    return products;
  }
  
  render() {
    return (
      <div className="container">
        <ProductList title="Product List" source={this.state.productList}/>
        <ProductList title="Product Categories" source={this.state.productList} />
        <ProductList title="Products Title" source={this.state.productList} />
        <ProductList title="Products Currencies" source={this.state.productList} />
        <ProductList title="Mixed" source={this.state.productList} />
      </div>
    );
  }
}

export default App;
