import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  media: {
    height: "100%",
    width: "100%",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "start",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
