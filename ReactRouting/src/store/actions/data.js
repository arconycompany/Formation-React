const getProduct = () => ({
  type: 'GET_PRODUCTS',
});

const reveiveProducts = (products) => ({
  type: 'RECEIVE_PRODUCTS',
  products,
});

const getProductError = (error) => ({
  type: 'GET_PRODUCTS_ERROR',
  error,
});

export const getProductsFromApi = () => (dispatch) => {
  dispatch(getProduct());

  return fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((products) => dispatch(reveiveProducts(products)))
    .catch((error) => dispatch(getProductError(error)));
};
