import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
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

                  <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Immerse</a>
                      </div>
                      <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                          <li className="active"><a href="#">Home</a></li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Languages<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                              <li><a href="#">C#</a></li>
                              <li><a href="#">Python</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Photography</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                          <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                          <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                      </div>
                    </div>
                  </nav>

              </div>
          </header>
        </section>

        <section className="App-content">
          <div className="jumbotron text-center">
            <h1>Coming soon...</h1>
          </div>
        </section>

        <footer className="App-footer">
              <span>© Copyright Immerse with me 2018</span>
        </footer>

        </div>

    );
  }
}

export default App;
