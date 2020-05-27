import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { useStyles } from "../styles";
import { AccountCircle, Home } from "@material-ui/icons";

const Header = (props) => {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Button component={Link} to="/">
            <Home style={{ color: "#f4f4f4" }} />
          </Button>
          <Button component={Link} to="/login">
            <AccountCircle style={{ color: "#f4f4f4" }} />
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withRouter(Header);
