import gallery from "./gallery/gallery.reducers";
import cart from "./cart/cart.reducers";
import user from "./user/user.reducers";
// {
//     gallery: {
//         data: [],
//         selectedProduct: 0,
//         isLoading: false,
//         error: null,
//     },
//     cart: {
//         data: [],
//         isloading: false,
//         error: null,
//     }

        // user: {
        //     data: [],
        //      isLogged: false,
        //      error: null,
        // }
// }

// eslint-disable-next-line
const Reducers = {
  gallery,
  cart,
  user
};

export default Reducers;
