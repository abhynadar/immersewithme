//@flow
import React from 'react';

class NavComponent extends React.Component {

  render() {

    return (
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
          );
  }
}


export default NavComponent;
