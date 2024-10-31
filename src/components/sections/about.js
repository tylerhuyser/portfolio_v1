import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--orange);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--orange);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      max-width: 500px;
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--orange);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "TylerHuyserHeadshot.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            tracedSVGOptions: {
              color: "#64ffda"
            }
          )
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm Tyler, an enthusiastic and adaptable junior software engineer based in New York, NY.
            </p>

            <p>
              Passionate about using technology to creatively solve problems, I bring expertise in full-stack software development and technologies, including Vanilla Javascript, React, Ruby on Rails, and Node.js.
            </p>
              
            <p>
              I am currently in the midst of a career transition, having previously worked as an executive search consultant in the arenas of biotechnology, technology, private equity, and venture captial.
            </p>

            <p>
              Blending analytical expertise from coding with strategic, relationship-building skills from my recruiting background, I aim to create impactful and transformative digital applications.
            </p>

            <p>
              I hold a bachelor's degree in film studies from{' '}<a href="https://www.columbia.edu/">Columbia University</a>.
              In 2019, I founded{' '}<a href="https://www.walkinmyshoesmedia.com/">Walk In My Shoes Media</a>, a diversity & inclusion training company.
            </p>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <GatsbyImage image={data.avatar.childImageSharp.gatsbyImageData} alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
