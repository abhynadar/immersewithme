import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import PrivateRoute from './components/security/privateroute';
import HomePageContainer  from './components/pages/homepage/homePageContainer';
import LoginPageContainer from './components/pages/loginpage/loginPageContainer';
import SignUpPageContainer from './components/pages/signuppage/signupPageContainer';
import * as Urls from './constants/Urls';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

//<Route exact path={Urls.LOGIN_URL} component={LoginPageContainer} />
//<PrivateRoute exact path={Urls.HOME_URL} component={HomePageContainer} />
//<Route path={Urls.LOGIN2_URL} component={LoginPageContainer} />
//<Route path={Urls.SIGNUP_URL} component={SignupPageContainer} />


const Main = () => (
  <div>
    <BrowserRouter>
    <Switch>
      <Route exact path={Urls.HOME_URL} component={HomePageContainer} />
      <Route exact path={Urls.HOME2_URL} component={HomePageContainer} />
      <Route exact path={Urls.LOGIN_URL} component={LoginPageContainer} />
      <Route exact path={Urls.SIGNUP_URL} component={SignUpPageContainer} />
    </Switch>
    </BrowserRouter>
  </div>
)

export default Main
