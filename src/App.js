import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import Login from './components/Login'
import useAuth from './auth/useAuth';
import firebase, { FirebaseContext } from './firebase';
import ForgotPassword from './components/ForgotPassword';



function App() {
  const user = useAuth();
  console.log({ user });
  return (
    <Router>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/forgotpassword' component={ForgotPassword} />
        </Switch>
      </FirebaseContext.Provider>
    </Router>
  );
}

export default App;
