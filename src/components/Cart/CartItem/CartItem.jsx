import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core/";
import useStyle from "./styles.js";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyle();
  console.log("quantity", item);
  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      >
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">{item.name}</Typography>
          <Typography variant="h5">
            {item.line_total.formatted_with_symbol}
          </Typography>
        </CardContent>

        <CardActions className={classes.cartActions}>
          <div className={classes.buttons}>
            <Button
              type="button"
              size="large"
              variant="contained"
              color="secondary"
              onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
            >
              -
            </Button>

            <Typography variant="h2">{item.quantity}</Typography>

            <Button
              type="button"
              size="large"
              variant="contained"
              color="secondary"
              onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </div>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            type="button"
            className={classes.buttons}
            onClick={() => onRemoveFromCart(item.id)}
          >
            <DeleteIcon />
            Delete
          </Button>
        </CardActions>
      </CardMedia>
    </Card>
  );
};

export default CartItem;
