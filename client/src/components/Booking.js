import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const BookingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  .bookingContainer {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
  }
  .airportContainer {
    background-color: grey;
    width: 100%;
    margin: 10px;
    text-align: center;

    input {
      padding: 10px;
    }
  }
  .airportInput {
    boerder-color: #444444;
  }
`;

const FormStyling = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

class Booking extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BookingStyle>
        <div className='bookingContainer'>
          <form>
            <FormStyling>
              <div className='airportCont'>
                <input type='text' className='airportInput' name='origin' placeholder='Origin' data-label='origin' />
                <input type='text' className='airportInput' name='dest' placeholder='Destination' data-label='destination' />
              </div>
            </FormStyling>
            <RangePicker showTime />
          </form>
        </div>
      </BookingStyle>
    )
  }
}

export default Booking;

