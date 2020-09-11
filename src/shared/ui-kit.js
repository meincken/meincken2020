import React from "react";
import { color, typography } from "./styles";
import { Link } from "gatsby";

import styled from "styled-components";

// Heading
const Title = styled.h2`
  color: ${color.lightest};
  font-weight: ${typography.weight.bold};
  margin-bottom: 1.2rem;
`;

export const Heading = ({ title }) => <Title>{title}</Title>;

// Button
const LinkTo = styled(Link)`
  background: ${color.primary};
  border-radius: 0.5rem;
  color: ${color.dark};
  display: inline-block;
  margin-top: 0.6rem;
  padding: 1rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.5s;

  &:hover {
    background: ${color.darken};
  }

  svg {
    margin-right: 1rem;
  }
`;

export const Button = ({ href, title }) => (
  <LinkTo className="btn" to={href}>
    {title}
  </LinkTo>
);

const SectionTitle = styled.header`
  h2 {
    float: left;
    font-size: ${typography.size.s3}rem;
    font-weight: ${typography.weight.black};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin: 0;

    span {
      border-bottom: 0.3rem solid ${color.primary};
      padding-bottom: 0.6rem;
    }
  }
`;

export const SectionHeading = ({ title }) => (
  <SectionTitle>
    <h2>
      <span>{title}</span>
    </h2>
  </SectionTitle>
);
