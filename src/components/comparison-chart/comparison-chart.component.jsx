// Comparison chart of materials in home page.
// Reference for swatch:
// https://github.com/dtvi2412/Reactjs-Change-Product-Color

import { useEffect, useState } from "react";
import "./comparison-chart.styles.scss";
import WeekendTwoToneIcon from "@mui/icons-material/WeekendTwoTone";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { OrderButton } from "../order-button/order-button.component";
import materialsData from "../../materials-data";

const ComparisonChart = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    setMaterials(materialsData);
  }, []);

  const handleChooseColour = (id, colour) => {
    setMaterials((prev) => {
      return prev.map((material) => {
        if (material.id === id) {
          let newCheckImg = {};
          Object.keys(material.checkImg).map((item) => {
            material.checkImg[item] = false;
            newCheckImg = { ...material.checkImg, [colour]: true };
            return null;
          });
          return { ...material, checkImg: newCheckImg };
        } else {
          return material;
        }
      });
    });
  };

  return (
    <div>
      <Grid container spacing={2} className="comparison-container">
        {materials.map(({ id, name, colours, checkImg, linkImg }) => (
          <Grid
            item
            xs={6}
            md={4}
            key={id}
            className="product-comparison-container"
          >
            {/* Material image featured */}
            {Object.keys(checkImg).map((item) => {
              if (checkImg[item]) {
                return (
                  <img
                    key={item}
                    src={linkImg[item]}
                    alt={name}
                    className="product-comparison-image"
                  />
                );
              } else {
                return null;
              }
            })}
            {/* Swatch */}
            <div className="swatches">
              {colours.map((colour) => {
                return (
                  <img
                    src={linkImg[colour]}
                    key={`${name} ${colour} swatch`}
                    alt={name}
                    className={` ${checkImg[colour] && "active"} swatch `}
                    onClick={() => handleChooseColour(id, colour)}
                  />
                );
              })}
            </div>
            <p>Popular!</p>
            <h3>{name}</h3>
            <OrderButton variant="contained" size="small">
              Buy
            </OrderButton>
            {[1, 2, 3, 4, 5, 6, 7].map((number) => (
              <div className="feature-logo-container" key={number}>
                <WeekendTwoToneIcon className="feature-logo" />
                <h4>Feature {number}: a refreshed look</h4>
              </div>
            ))}
            <Button>Learn more &gt;</Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ComparisonChart;
