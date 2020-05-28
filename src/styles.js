import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  palette: {
    type: "dark",
  },
  //Header
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
  },
  logoutbutton: {
    display: 'flex',
    alignItems: 'center',
  },
  //Login
  main: {
    marginTop: theme.spacing(10),
    width: "400px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(3),
  },

  paper: {
    padding: theme.spacing(2),
    width: '400px',
  },

  signin: {
    margin: theme.spacing(3),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  register: {
    marginTop: theme.spacing(3),
    cursor: "pointer",
  },
  forgotpassword: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5)
  },
}));
