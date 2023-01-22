// Popover of cart items upon hover (desktop) / click (handheld devices) on the cart icon within the navbar.

import { Fragment } from "react";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CartItem from "../cart-item/cart-item.component";

import { Button, Paper, Typography } from "@mui/material";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6">Bag</Typography>
      <div>
        {cartItems.length ? (
          <Fragment>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Typography>Total: ${cartTotal}</Typography>
          </Fragment>
        ) : (
          <Typography>Your cart is empty.</Typography>
        )}
      </div>
      <Button href="/checkout">Go to checkout</Button>
    </Paper>
  );
};

export default CartDropdown;
