import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import Hero from './Hero.js';
import Booking from './Booking.js';

const LayoutStyle = styled.div`

`;

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <LayoutStyle>
        <Hero isLoaded={this.props.animate} />
        <Booking />
      </LayoutStyle>
    );
  }
}

export default Layout;
