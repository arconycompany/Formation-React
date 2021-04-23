import React, { Component } from 'react';
import { ProductItem } from './ProductItem';

const PRODUCTS = [
  {
    id: 1,
    picture: '',
    category: 'category',
    title: 'title',
    description: 'description',
    price: 'price',
  },
  {
    id: 2,
    picture: '',
    category: 'category',
    title: 'title',
    description: 'description',
    price: 'price',
  },
  {
    id: 3,
    picture: '',
    category: 'category',
    title: 'title',
    description: 'description',
    price: 'price',
  },
  {
    id: 4,
    picture: '',
    category: 'category',
    title: 'title',
    description: 'description',
    price: 'price',
  },
];

export class ProductList extends Component {
  render() {
    return (
      <ul>
        {PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddProduct={this.props.onAddProduct}
          />
        ))}
      </ul>
    );
  }
}
