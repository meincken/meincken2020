import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  .gatsby-image-wrapper {
    display: block;
    margin: 2rem auto;
    max-width: 26rem;
  }
`;

const FeatureGrid = ({ gridItems }) => (
  <Section>
    {gridItems.map((item) => (
      <article className="section" key={item.text}>
        <PreviewCompatibleImage imageInfo={item} />
        <p>{item.text}</p>
      </article>
    ))}
  </Section>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
