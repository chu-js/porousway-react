// Basic banner component in home page.

import "./banner.styles.scss";
import Link from "@mui/material/Link";
import { OrderButton } from "../order-button/order-button.component";

const Banner = (banner) => {
  const { product, tagline, url } = banner;

  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${url})`,
      }}
    >
      <div className="banner-body-container">
        <div className="banner-words-container">
          <h2>{product}</h2>
          <h3>{tagline}</h3>
        </div>
        <div className="buttons-container">
          <OrderButton variant="contained">Order now</OrderButton>
          <Link to="" underline="hover">
            Learn more
          </Link>
          <span> {">"}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
