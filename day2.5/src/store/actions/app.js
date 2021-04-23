export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const addToCart = productId => ({
    type: 'ADD_TO_CART',
    productId
})

export const removeProduct = productId => ({
    type: 'REMOVE_PRODUCT',
    productId
})