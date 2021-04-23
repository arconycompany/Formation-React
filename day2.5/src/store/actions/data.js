const getProduct = () => ({
    type: 'GET_PRODUCTS',
});

export const getProductsFromApi = () => (dispatch) => {
        dispatch(getProduct())
    }