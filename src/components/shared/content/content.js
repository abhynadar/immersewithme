//@flow
import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

import HomePage from '../../pages/homepage/homePage';
import LoginPage from '../../pages/loginpage/loginPage';
import SignUpPage from '../../pages/signuppage/signupPage';

//{ pageName === "cards" && <SearchContainer/> }
//{ pageName === "addressBook" && <AddressBookContainer/> }
//{ pageName === "contactView" && <ContactViewContainer/> }
//{ pageName === "profileView" && <ProfileViewContainer /> }

const Content = ({pageName}) => {
    return (
      <div >
        <Header />
        { pageName === "home" && <HomePage  /> }
        { pageName === "login" && <LoginPage /> }
        { pageName === "signup" && <SignUpPage /> }
        <Footer />
      </div>
    );
}

export default Content;
