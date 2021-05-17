import * as actions from "./gallery.actions";

const GalleryReducer = (
  state = {
    data: [],
    isLoading: false,
    error: null,
    selectedProductIndex: 0,
  },
  action
) => {
  switch (action.type) {
    case actions.REQUEST_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case actions.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [...action.products],
      };
    case actions.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actions.SET_SELECTED_PRODUCT_INDEX:
      return {
        ...state,
        selectedProductIndex: action.index,
      };

    default:
      return state;
  }
};

export default GalleryReducer;