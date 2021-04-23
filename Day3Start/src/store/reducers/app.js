const initialAppState = {
  productsCount: 0,
  productsIds: [],
  locale: "FR"
};

export const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        productsCount: state.productsCount + 1,
        productsIds: [...state.productsIds, action.productId],
      };
    default:
      return state;
  }
};
