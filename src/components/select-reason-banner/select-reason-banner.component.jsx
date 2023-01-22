// Banner on home page for user to select reason for visiting the site. Logic of banners changed below determined by ConditionalBanners.

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { OrderButton } from "../order-button/order-button.component";

import "./select-reason.styles.scss";

const SelectReasonBanner = ({ reason, handleChange }) => {
  return (
    <div className="select-reason-banner-container">
      <div className="select-reason-banner-body-container">
        <h2>How can we help you?</h2>
        <Box sx={{ m: 2, minWidth: 120 }}>
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="select-reason-label">Solution</InputLabel>
            <Select
              labelId="select-reason-label"
              id="select-reason"
              value={reason}
              label="Solution"
              onChange={handleChange}
            >
              <MenuItem value={"Aesthetic"}>Aesthetic</MenuItem>
              <MenuItem value={"Anti-slip"}>Anti-slip</MenuItem>
              <MenuItem value={"Waterproofing"}>Waterproofing</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <OrderButton variant="contained">Order now</OrderButton>
      </div>
    </div>
  );
};

export default SelectReasonBanner;
