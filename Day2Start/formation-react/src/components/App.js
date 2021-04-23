import React, { Component } from 'react';
import { CartCount } from 'components/CartCount';
import { ProductList } from 'components/ProductList';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsCount: 0,
      productsIds: [],
    };
    this.onAddProduct = this.onAddProduct.bind(this);
  }

  onAddProduct(data) {
    this.setState((prevState) => ({
      productsCount: prevState.productsCount + 1,
      productsIds: [...prevState.productsIds, data.id],
    }));
  }

  render() {
    return (
      <div>
        <CartCount count={this.state.productsCount} />
        <ProductList onAddProduct={this.onAddProduct} />
      </div>
    );
  }
}
