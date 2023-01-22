import ProductCard from "../product-card/product-card.component";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Category = ({ title, products }) => (
  <Box sx={{ flexGrow: 1, m: 3 }}>
    <Typography variant="h2">
      {title.toUpperCase()}
    </Typography>
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product} item xs={12} md={3}>
          <ProductCard key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Category;
