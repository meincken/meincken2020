import { css } from "styled-components";

// Global style variables
export const background = {
  app: "#F6F9FC",
  appInverse: "#7A8997",
  positive: "#E1FFD4",
  negative: "#FEDED2",
  warning: "#FFF5CF",
};

export const color = {
  // Palette
  primary: "#a9cc17", // acidgreem

  // Monochrome
  lightest: "#FFF",
  lighter: "#e1e1e1",
  darkest: "#1e1e1e",
  dark: "#000",

  border: "rgba(0,0,0,.1)",

  // Status
  positive: "#66BF3C",
  negative: "#FF4400",
  warning: "#E69D00",
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    primary: '"Source Sans Pro", sans-serif',
    code:
      '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    light: "200",
    regular: "400",
    black: "900",
  },
  size: {
    s1: "1.2",
    s2: "1.4",
    s3: "1.6",
    m1: "2",
    m2: "2.4",
    m3: "2.8",
    l1: "3.2",
    l2: "4",
    l3: "4.8",
    l4: "5",
    code: "9",
  },
};

export const breakpoint = 600;
export const pageMargin = "5.55555";

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;
