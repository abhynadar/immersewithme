//@flow
import React from 'react';

import Content from '../../shared/content/content';
//import  HomePage  from './homePage';

class SignUpPageContainer extends React.Component {
  render() {
    return (
      <Content {...this.props} pageName="signup"/>
    );
  }
}

export default SignUpPageContainer;
