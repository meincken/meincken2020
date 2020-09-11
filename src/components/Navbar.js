import React from "react";
import { Link } from "gatsby";
import Logo from "../img/meincken-logo.svg";
import styled from "styled-components";

const Header = styled.header`
  justify-items: center;
  padding: 2rem 0;

  .navbar-menu {
    display: flex;
    justify-content: center;

    a {
      text-transform: uppercase;
      margin: 0 1rem;
      text-decoration: none;
    }
  }
`;

const Navbar = class extends React.Component {
  render() {
    return (
      <Header className="global-header">
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <Logo className="logo" />
            </Link>
          </div>
          <div id="navMenu" className="navbar-menu">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </div>
        </nav>
      </Header>
    );
  }
};

export default Navbar;
