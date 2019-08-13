import { combineReducers } from "redux";

import userReducers from "./user/user.reducer";
import cartReducers from "./cart/cart.reducer";

export default combineReducers({
  user: userReducers,
  cart: cartReducers
});
