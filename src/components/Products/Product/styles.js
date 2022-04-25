import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    maxWidth: "100%",
    variant: "outlined",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardLabel: {
    display: "flex",
    justifyContent: "space-between",
  },

  cardDescription: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
