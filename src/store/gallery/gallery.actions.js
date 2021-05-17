import ApiFakeStore from "../../conf/api.fakeStore";

export const REQUEST_PRODUCTS = "request products";
export const FETCH_ALL_PRODUCTS = "fetch all product";
export const FETCH_PRODUCTS_SUCCESS = "fetch product success";
export const FETCH_PRODUCTS_ERROR = "fetch products error";
export const SET_SELECTED_PRODUCT_INDEX = "set selected product index";

export const requestProducts = () => ({
  type: REQUEST_PRODUCTS,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
});

export const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  error,
});

export const fetchAllProducts = () => (dispatch) => {
  dispatch(requestProducts());
  return ApiFakeStore.fetchAllProducts().then(
    (products) => dispatch(fetchProductsSuccess(products)),
    (error) => fetchProductsError(error)
  );
};

export const setSelectedProductIndex = (index) => ({
    type: SET_SELECTED_PRODUCT_INDEX,
    index
})