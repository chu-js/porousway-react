import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import NavigationBar from "./routes/navigation-bar/navigation-bar.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import UserProfile from "./routes/user-profile/user-profile.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

import { checkUserSession } from "./store/user/user.action";

const App = () => {
  // Run on initialisation of user object
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="shop" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
