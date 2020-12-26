import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const StyledSkillsSection = styled.section`
  max-width: 700px;
  min-height: 50vh;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

const SliderWrapper = styled.div`
  .skill-icon {
    i {
      margin: 1.9em 0 0.4em 18%;
      width: 64%;
    }
    p {
      margin: 0 0 1.2em 0;
      font-size: 0.9em;
      text-align: center;
    }
  }
  .BrainhubCarousel__arrows {
    border: 3px solid blue;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0);
    span {
      border-color: blue;
    }
    &:hover {
      background: blue;
      span {
        border-color: white;
      }
    }
  }
  .BrainhubCarousel__trackContainer {
    margin: 0 2.1em;
    padding: 0 1.3em;
    border-radius: 4px;
    background: white;
    background-image: var(--navy) no-repeat center center fixed;
    background-size: cover;
    box-shadow: inset 0px 0px 0.5rem 0px rgba(0, 0, 0, 0.22);
  }
`;

const Skills = () => {
  const [skillsDisplayed, setSkillsDisplayed] = useState(2);

  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width > 850) {
      setSkillsDisplayed(8);
    } else if (width > 640) {
      setSkillsDisplayed(6);
    } else if (width > 540) {
      setSkillsDisplayed(5);
    } else {
      setSkillsDisplayed(4);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener(`resize`, handleResize);
    return () => window.removeEventListener(`resize`, handleResize);
  });

  return (
    <StyledSkillsSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">Some of my skills...</h2>
      <div className="section skills-container" id="skills">
        <SliderWrapper>
          <Carousel
            slidesPerPage={skillsDisplayed}
            arrows={skillsDisplayed > 4}
            autoPlay={2700}
            infinite>
            <div className="skill-icon">
              <i className="devicon-nodejs-plain skill-icon"></i>
              <p>Node JS</p>
            </div>

            <div className="skill-icon">
              <i className="devicon-html5-plain skill-icon"></i>
              <p>HTML5</p>
            </div>

            <div className="skill-icon">
              <i className="devicon-javascript-plain skill-icon"></i>
              <p>Javascript</p>
            </div>

            <div className="skill-icon">
              <i className="devicon-react-original skill-icon"></i>
              <p>ReactJS</p>
            </div>

            <div className="skill-icon">
              <i className="devicon-redux-original skill-icon"></i>
              <p>Redux</p>
            </div>

            <div className="skill-icon">
              <i className="devicon-css3-plain skill-icon"></i>
              <p>CSS3</p>
            </div>

            <div className="skill-icon">
              <i className="devicon-git-plain skill-icon"></i>
              <p>Git</p>
            </div>

            <div className="skill-icon">
              <i className="devicon-ruby-plain skill-icon"></i>
              <p>Ruby</p>
            </div>

            <div className="skill-icon">
              <i className="devicon-rails-plain skill-icon"></i>
              <p>Rails</p>
            </div>

            <div className="skill-icon">
              <i className="devicon-mongodb-plain skill-icon"></i>
              <p>MongoDB</p>
            </div>

            <div className="skill-icon">
              <i className="devicon-express-original skill-icon"></i>
              <p>Express</p>
            </div>

            <div className="skill-icon">
              <i className="devicon-postgresql-plain skill-icon"></i>
              <p>PostgreSQL</p>
            </div>

            <div className="skill-icon">
              <i className="devicon-heroku-original skill-icon"></i>
              <p>Heroku</p>
            </div>

            <div className="skill-icon">
              <i className="devicon-photoshop-plain skill-icon"></i>
              <p>Photoshop</p>
            </div>
          </Carousel>
        </SliderWrapper>
      </div>
    </StyledSkillsSection>
  );
};

export default Skills;
