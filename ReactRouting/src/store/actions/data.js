const getProduct = () => ({
  type: 'GET_PRODUCTS',
});

const getProductById = () => ({
  type: 'GET_PRODUCT',
});

const reveiveProducts = (products) => ({
  type: 'RECEIVE_PRODUCTS',
  products,
});

const reveiveProduct = (product) => ({
  type: 'RECEIVE_PRODUCT',
  product,
});

const getProductError = (error) => ({
  type: 'GET_PRODUCTS_ERROR',
  error,
});

export const clearProduct = () => ({
  type: 'CLEAR_PRODUCT',
});

export const getProductsFromApi = () => (dispatch) => {
  dispatch(getProduct());

  return fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((products) => dispatch(reveiveProducts(products)))
    .catch((error) => dispatch(getProductError(error)));
};

export const getProductFromApi = (productId) => (dispatch) => {
  return fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.json())
    .then((product) => dispatch(reveiveProduct(product)))
};


