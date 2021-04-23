const initialState = {
    products: [],
    isLoading: true,
    error: null
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                isLoading: true,
            }
            break;
        case "RECEIVE_PRODUCTS":
            return {
                ...state,
                products: action.products,
                isLoading: false,
            }
            break;
        case "GET_PRODUCTS_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
            break;
        default:
            return state;
    }
}