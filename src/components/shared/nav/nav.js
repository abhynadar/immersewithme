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
                    <li className="active"><a href="/home">Home</a></li>
                    <li className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" href="/languages">Languages<span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="/languages/csharp">C#</a></li>
                        <li><a href="/languages/python">Python</a></li>
                      </ul>
                    </li>
                    <li><a href="/photography">Photography</a></li>
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
