// User profile page: to view and reschedule bookings

import { useDispatch } from "react-redux";

import { signOutStart } from "../../store/user/user.action";

import { Link } from "@mui/material";

const UserProfile = () => {
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

  return (
    <div>
      <h1>user profile</h1>
      <Link
        textAlign="center"
        href="/"
        onClick={signOutUser}
        sx={{ textDecoration: "none", color: "text.primary" }}
      >
        Sign Out
      </Link>
    </div>
  );
};

export default UserProfile;
