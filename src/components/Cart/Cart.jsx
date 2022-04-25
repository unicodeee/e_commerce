import {
  IconButton,
  Button,
  Typography,
  AppBar,
  Box,
  Toolbar,
  Badge,
  Grid,
  Container,
} from "@material-ui/core/";
import { Instagram } from "@mui/icons-material/";
import React from "react";
import useStyle from "./styles.js";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleEmptyCart,
  handleRemoveFromCart,
  handleUpdateCartQty,
}) => {
  const classes = useStyle();

  const EmptyCart = () => {
    return (
      <div>
        <Typography variant="h3"> No items in cart </Typography>;
        <Typography variant="h6">
          {" "}
          Let's <Link to="/">add some</Link>{" "}
        </Typography>
      </div>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={2}>
          {cart.line_items.map((item) => (
            <Grid item key={item.id} xs={9}>
              <CartItem
                item={item}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
              ></CartItem>
            </Grid>
          ))}
        </Grid>

        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              className={classes.checkoutButton}
              startIcon={<DeleteIcon />}
              component={Link}
              to="/checkout"
            >
              Check out
            </Button>

            <Button
              size="large"
              variant="contained"
              color="inherit"
              className={classes.emptyButton}
              startIcon={<SendIcon />}
              onClick={handleEmptyCart}
            >
              Empty
            </Button>
            {console.log("cart.line_items", cart.line_items)}
          </div>
        </div>
      </>
    );
  };

  return (
    <Container>
      {cart.line_items && cart.line_items.length ? (
        <FilledCart />
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};

export default Cart;
