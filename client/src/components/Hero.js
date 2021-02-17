import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

import heroImg from '../img/hero_cirrus.jpg';
import BookingForm from './Form.js';

const HeroStyling = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  z-index: 5;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 15pt;

    h1 {
      font-weight: 200;
      font-size: 60pt;
    }
  }

  .fade-in-first {
    animation: fade 0.9s ease-in;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }
`;

const ScrollStyle = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: -1;
  position: absolute;

  img {
    height: 100vh;
    width: 100%;
  }
`;

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.first = <p className={
                  this.props.isLoaded ? 'fade-in-first' : ''
                }>PERSONALIZED AIR TRAVEL</p>;
    this.second = <h1>Affordable. Convenient.
    Flexible.</h1>;
 
    this.renderArr = [this.first, this.second];
  }

  render() {
    return (
      <HeroStyling>
        <ScrollStyle>
          <Parallax y={[-60, 60]} className='scrollFilter'>
            <img src={heroImg} />
          </Parallax>       
        </ScrollStyle>
        <div className='container'>
          {this.renderArr.map((item, i) => (
            <div key={i} >{item}</div>
          ))}
          <BookingForm />
        </div>      
      </HeroStyling>
    )
  }

}

export default Hero;
