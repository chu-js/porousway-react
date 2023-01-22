// Full shop page (preview of all categories)
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCategoriesStart } from "../../store/categories/categories.action";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";

import Category from "../../components/category/category.component";
import CircularProgress from "@mui/material/CircularProgress";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <div>
      {isLoading ? (
        <CircularProgress
          color="inherit"
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
          }}
        />
      ) : (
        Object.keys(categoriesMap).map((key) => {
          const products = categoriesMap[key];
          return <Category key={key} title={key} products={products} />;
        })
      )}
    </div>
  );
};

export default Shop;
