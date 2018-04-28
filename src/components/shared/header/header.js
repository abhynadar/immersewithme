//@flow
import React from 'react';
import logo from '../../../images/logo.png';
import NavComponent from '../nav/nav';

const Header = () => {
    return (
      <section >
        <header >
            <div className="App">
                <div className="App-header">
                      <img src={logo} alt="Immerse with me" className="App-logo"></img>
                      <span className="App-title">Immerse!!!</span>
                </div>
                <ul className="header__social">
                    <li>
                        <a href="#0" rel="nofollow" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i><span className="social-noshow"> Facebook</span></a>
                    </li>
                    <li>
                        <a href="#0" rel="nofollow" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i><span className="social-noshow"> Twitter</span></a>
                    </li>
                    <li >
                        <a href="#0" rel="nofollow" target="_blank"><i className="fa fa-github" aria-hidden="true"></i><span className="social-noshow"> Github</span></a>
                    </li>
                </ul>
            </div>

            <NavComponent />
        </header>
      </section>
    );
}


export default Header;
