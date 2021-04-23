import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductsFromApi } from '../store/actions/data';
import ProductItem from './ProductItem';

const ProductList = ({ isLoading, products, fetchProducts }) => {
  useEffect(() => {
    if (isLoading) {
      fetchProducts();
    }
  }, [products]);

  if (isLoading) {
    return <strong>Loading data...</strong>;
  }

  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.data.isLoading,
  products: state.data.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(getProductsFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
