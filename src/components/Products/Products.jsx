import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product.jsx";
import useStyle from "./styles.js";

const Products = ({ products, onAddToCard }) => {
  const classes = useStyle();

  return (
    <main className={classes.content}>
      {/* <div className={classes.toolbar}></div> */}

      {console.log("products asdasdasdas", products)}

      <Grid container justifyContent="left" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCard={onAddToCard} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
