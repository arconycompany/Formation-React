const initialAppState = {
    productsCount: 0,
    productIds: []
};

export const productListReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                productsCount: state.productsCount + 1,
                productIds: [...state.productIds, action.productId]
            }
            break;
        case "REMOVE_PRODUCT":
            return {
                ...state,
                productsCount: state.productsCount - 1,
                productIds: [...state.productIds.filter(x => x != action.productId)]
            }
            break;
        default:
            return state;
    }
}