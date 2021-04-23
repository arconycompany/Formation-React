const initialAppState = {
  locale: 'fr',
  productsCount: 0,
  productsIds: [],
};

export const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        productsCount: state.productsCount + 1,
        productsIds: [...state.productsIds, action.productId],
      };
    case 'SWITCH_LANG':
      return {
        ...state,
        locale: action.locale,
      };
    default:
      return state;
  }
};
