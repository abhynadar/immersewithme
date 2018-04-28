import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import PrivateRoute from './components/security/privateroute';
import HomePageContainer  from './components/pages/homepage/homePageContainer';
//import LoginPageContainer from './components/pages/loginpage/loginpageContainer';
//import SignupPageContainer from './components/pages/signuppage/signuppageContainer';
//import * as Urls from './constants/Urls';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <div>
    <Switch>
      <Route exact path={Urls.LOGIN_URL} component={LoginPageContainer} />
      <PrivateRoute exact path={Urls.HOME_URL} component={HomePageContainer} />
      <Route path={Urls.LOGIN2_URL} component={LoginPageContainer} />
      <Route path={Urls.SIGNUP_URL} component={SignupPageContainer} />
    </Switch>
  </div>
)

export default Main
