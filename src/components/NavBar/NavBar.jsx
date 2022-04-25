import * as React from "react";
import logo from "../../assets/cart.png";
import { makeStyles } from "@material-ui/core/styles";
import useStyles from "./styles.js";
import {
  IconButton,
  Button,
  Typography,
  AppBar,
  Box,
  Toolbar,
  Badge,
} from "@material-ui/core/";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton // home button
            component={Link}
            to="/"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon color="#FB8C00" />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Commerce.js
          </Typography>

          <div className={classes.toolbarButtons}>
            {location.pathname == "/products" && (
              <Button color="inherit" component={Link} to="/cart">
                {/* cart button */}
                <img src={logo} alt="cart.png" height="40px" flex="1" />
                <Badge color="secondary" badgeContent={totalItems}></Badge>
              </Button>
            )}
            <Button variant="contained" color="secondary">
              {/* login button */}
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
