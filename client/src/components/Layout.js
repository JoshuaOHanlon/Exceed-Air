import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import Hero from './Hero.js';
import Desc from './Description.js';
import WhatsIncluded from './Included.js';
import Footer from './Footer.js';

const LayoutStyle = styled.div`

`;

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <LayoutStyle>
        <Hero isLoaded={this.props.animate} getAirports={this.props.getAirports} />
        <Desc />
        <WhatsIncluded />
        <Footer />
      </LayoutStyle>
    );
  }
}

export default Layout;
