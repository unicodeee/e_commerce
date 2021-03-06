import { makeStyles } from "@material-ui/core/styles";
import { styled, alpha } from "@mui/material/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  // this group of buttons will be aligned to the right side
  toolbarButtons: {
    marginLeft: "auto",
  },

  searchBox: {
    position: "relative",
    marginLeft: "auto",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
}));
