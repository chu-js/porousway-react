import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "../../utils/stripe/axios.utils";

import { clearAllItemsFromCart } from "../../store/cart/cart.action";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const cartItems = useSelector(selectCartItems);
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  // Clean up: This generates a new client secret every time the cartTotal changes. Is this a good idea?
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${amount * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cartItems]);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setSucceeded(true);
    setError(null);
    setProcessing(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        // Clean up: Why does clearAllItemsFromCart() throw an error? The app tries to make a GET request to Firebase functions, but why?
        // Tested: If used for onClick of individual button to clear cart but not for payment, the cart action works.
        dispatch(clearAllItemsFromCart());
        navigate("/", { replace: true });
      }
    }
  };

  const changeHandler = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div>
      <form onSubmit={paymentHandler}>
        <h3>Credit card payment:</h3>
        <CardElement onChange={changeHandler} />
        {processing ? (
          <CircularProgress color="inherit" />
        ) : (
          <Button
            variant="contained"
            type="submit"
            disabled={processing || disabled || succeeded}
          >
            Pay now
          </Button>
        )}
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default PaymentForm;
