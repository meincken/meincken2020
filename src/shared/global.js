import { createGlobalStyle, css } from "styled-components";
import { color, typography } from "./styles";

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,900";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}rem;
  font-weight: ${typography.weight.regular};
  background: #1e1e1e;
  color: ${color.lighter};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.regular};
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: ${typography.weight.bold};
  }

  hr {
    border: none;
    border-top: 0.1rem solid ${color.border};
    clear: both;
    margin-bottom: 1.25rem;
  }

  code,
  pre {
    font-family: ${typography.type.code};
    font-size: ${typography.size.s2 - 1}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    vertical-align: baseline;
    color: ${color.secondary};
  }

  pre {
    line-height: 1.8rem;
    padding: 1.1rem 1rem;
    white-space: pre-wrap;

    background: rgba(0, 0, 0, 0.05);
    color: ${color.darkest};
    border-radius: 0.3rem;
    margin: 1rem 0;
  }

  a {
    color: ${color.primary};
  }

  p {
    font-size: 1.6rem;
    line-height: 1.5;
    margin-top: 0;
  }

  /* GLobals */
  .global-header,
  main,
  .global-footer {
    display: grid;
    grid-template-columns:
      [full-start] minmax(2rem, 1fr)
      [main-start] minmax(0, 102rem) [main-end]
      minmax(2rem, 1fr) [full-end];

    > * {
      grid-column: main;
    }

    .full-width {
      display: flex;
      grid-column: full;
      height: 50rem;
      justify-content: center;
      align-items: center;
    }
  }

  .global-header {
    background: ${color.dark};
    border-bottom: 0.1rem solid ${color.primary};
  }

  .global-footer {
    background: ${color.dark};
    border-top: 0.1rem solid ${color.primary};
  }

  .mb-10 {
    margin-bottom: 3rem;
  }

  .logo {
    width: 20rem;
    color: ${color.primary};
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    ${bodyStyles}
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;
