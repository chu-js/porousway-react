import axios from "axios";

const instance = axios.create({
  baseURL:
    // Public note: Removed API endpoint for payment function
    "https://xxx.cloudfunctions.net/createPaymentIntent",
});

export default instance;