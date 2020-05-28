import React from "react";
import {
  Paper,
  FormControl,
  InputLabel,
  Input,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useStyles } from "../styles";
import useFormValidation from "../auth/useFormValidation";
import validateLogin from "../auth/validateLogin";
import firebase from "../firebase";
import { Link } from 'react-router-dom'

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

const Login = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
  const classes = useStyles();
  const [login, setLogin] = React.useState(false);
  const [firebaseError, setFirebaseError] = React.useState(null);

  async function authenticateUser() {
    const { name, email, password } = values;
    try {
      login
        ? await firebase.register(name, email, password)
        : await firebase.login(email, password);

      props.history.push("/");
    } catch (error) {
      console.error("Auth Error", error);
      setFirebaseError(error.message);
    }
  }

  function handleLogin() {
    setLogin((prev) => !prev);
  }

  return (
    <main className={classes.main}>
      <Avatar className={classes.avatar}>
        <AccountCircle />
      </Avatar>
      <Typography component="h1" variant="h5" className={classes.signin}>
        {login ? "Sign up" : "Sign in"}
      </Typography>
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit}>
          {login && (
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                name="name"
                autoComplete="off"
                autoFocus
                onChange={handleChange}
                value={values.name}
              />
            </FormControl>
          )}

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              name="email"
              autoComplete="off"
              autoFocus
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            {errors.email && (
              <Typography color="secondary">{errors.email}</Typography>
            )}
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              autoComplete="off"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            {errors.password && (
              <Typography color="secondary">{errors.password}</Typography>
            )}
            {firebaseError && (
              <Typography color="secondary">{firebaseError}</Typography>
            )}
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isSubmitting}
          >
            SUBMIT
          </Button>
          <Typography
            className={classes.register}
            align="center"
            onClick={handleLogin}
          >
            {login ? "Sign in" : "Sign up"}
          </Typography>
        </form>
        {!login && <Button component={Link} to='/forgotpassword' className={classes.forgotpassword} >
          Forgot password?
      </Button>}

      </Paper>
    </main>
  );
};

export default Login;
