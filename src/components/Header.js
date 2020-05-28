import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { useStyles } from "../styles";
import { AccountCircle, Home, ExitToApp } from "@material-ui/icons";
import { FirebaseContext } from "../firebase";

const Header = (props) => {
    const { user, firebase } = React.useContext(FirebaseContext)
    const classes = useStyles();
    return (
        <>
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <Button component={Link} to="/">
                        <Home style={{ color: "#f4f4f4" }} />
                    </Button>
                    <div>

                        {user ? (
                            <div className={classes.logoutbutton}>
                                <Typography style={{
                                    marginRight: '1rem',
                                    color: '#f4f4f4'
                                }}>{user.displayName}</Typography>
                                <Button component={Link} to='/logout' style={{ color: "#f4f4f4" }} onClick={() => firebase.logout()}><ExitToApp /></Button>
                            </div>
                        ) : (<Button component={Link} to="/login">
                            <AccountCircle style={{ color: "#f4f4f4" }} />
                        </Button>)}

                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default withRouter(Header);
