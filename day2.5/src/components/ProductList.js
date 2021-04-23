import React, { Component, memo } from 'react';
import { useQuery } from 'react-query';
import  ProductItem  from './ProductItem';

export const ProductList = () => {
  const { isFetching, data } = useQuery('products', () =>
    fetch('https://fakestoreapi.com/products').then((res) => res.json())
  );

  if (isFetching) {
    return <strong>Loading data...</strong>;
  }

  return (
    <ul>
      {data.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </ul>
  );
};
