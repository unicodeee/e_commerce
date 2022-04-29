import {
  InputLable,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const Review = ({ checkoutToken }) => {
  console.log("checkoutToken", checkoutToken);
  return (
    <>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem key={product.name}>
            <ListItemText
              primary={product.name}
              secondary={product.price.formatted_with_symbol}
            >
              Hello
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Review;
