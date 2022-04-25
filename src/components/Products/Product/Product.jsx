import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@mui/icons-material";

import useStyles from "./styles.js";

const Product = ({ product, onAddToCard }) => {
  const classes = useStyles();

  function strip(html) {
    let doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={product.name}
      ></CardMedia>

      <CardContent>
        <div className={classes.cardLabel}>
          <Typography variant="h5" gutterbottom="true">
            {product.name}
          </Typography>

          <Typography variant="h5" gutterbottom="true">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>

        <div className={classes.cardDescription}>
          <Typography variant="h6" color="textSecondary" noWrap>
            {strip(product.description)}
          </Typography>
        </div>
      </CardContent>

      <CardActions
        disableSpacing
        className={classes.cardActions}
        onClick={() => onAddToCard(product.id, 1)}
      >
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
