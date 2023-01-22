import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

// Clean up: Identify existingCartItem based on more than ID, also by timeslot chosen
// 1. Add cart item
const addCartItem = (cartItems, productToAdd) => {
  // Find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    // Else, return the cartItems with an additional productToAdd
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

// 2. Remove cart item
const removeCartItem = (cartItems, cartItemToRemove) => {
  // Find existingCartItem to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // Check if quantity is equal to 1. If it is, remove that item from the cart.
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // Return back cartItems with matching existingCartItem with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// 3. Clear one cart item
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// 4. Clear all cart items
const clearAllCartItems = () => [];

// Create reducer actions: will update cartItems and re-render selectors of cartCount & cartTotal
// 1. Add cart item
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

// 2. Remove cart item
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

// 3. Clear one cart item
export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

// 4. Clear all cart items
export const clearAllItemsFromCart = () => {
  const newCartItems = clearAllCartItems();
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
