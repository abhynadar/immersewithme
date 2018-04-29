//@flow
import React from 'react';

import Content from '../../shared/content/content';
//import  HomePage  from './homePage';

class LoginPageContainer extends React.Component {
  render() {
    return (
      <Content {...this.props} pageName="login"/>
    );
  }
}

export default LoginPageContainer;
