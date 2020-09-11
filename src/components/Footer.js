import React from "react";
import styled from "styled-components";

import Logo from "../img/meincken-logo.svg";

const FooterContainer = styled.div`
  padding: 2rem 0;
  text-align: center;

  small {
    display: block;
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="global-footer">
        <FooterContainer>
          <Logo className="logo" />
          <small>&copy; 2020</small>
        </FooterContainer>
      </footer>
    );
  }
};

export default Footer;
