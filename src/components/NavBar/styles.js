import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  // this group of buttons will be aligned to the right side
  toolbarButtons: {
    marginLeft: "auto",
  },
}));
