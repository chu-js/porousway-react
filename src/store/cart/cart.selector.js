import { createSelector } from "reselect";

// Extract cart slice of reducer from root reducer.
const selectCartReducer = (state) => state.cart;

// Create memoized selector for cartItems.
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

// Create memoized selector for cartCount and cartTotal.
export const selectCartCount = createSelector(
  [selectCartItems],
  (newCartItems) =>
    newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (newCartItems) =>
    newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
);
