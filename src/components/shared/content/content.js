//@flow
import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

import HomePage from '../../pages/homepage/homePage';
//import SearchContainer from '../search/searchContainer';
//import AddressBookContainer from '../addressbook/addressbookContainer';
//import ContactViewContainer from '../contactview/contactviewContainer';
//import ProfileViewContainer from '../profileview/profileviewContainer';

//{ pageName === "cards" && <SearchContainer/> }
//{ pageName === "addressBook" && <AddressBookContainer/> }
//{ pageName === "contactView" && <ContactViewContainer/> }
//{ pageName === "profileView" && <ProfileViewContainer /> }

const Content = ({pageName}) => {
    return (
      <div >
        <Header />
        { pageName === "home" && <HomePage  /> }
        <Footer />
      </div>
    );
}

export default Content;
