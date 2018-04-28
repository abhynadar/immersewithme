//@flow
import React from 'react';

import Content from '../../shared/content/content';
import  HomePage  from './homePage';

class HomePageContainer extends React.Component {
  render() {
    return (
      <Content {...this.props} pageName="home"/>
    );
  }
}

export default HomePageContainer;
