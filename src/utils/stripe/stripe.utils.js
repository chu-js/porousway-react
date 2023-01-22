import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  // Public note: removed Stripe publishable key
  "xxx"
);
