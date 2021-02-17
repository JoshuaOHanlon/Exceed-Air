import React from 'react';
import styled from 'styled-components';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
    }

    customMenu() {

    }

    render() {
        return(
            <Form inline>
                <Form.Label htmlFor='departure' srOnly>
                    Departure
                </Form.Label>
                <Form.Control
                    className='mb-2 mr-sm-2'
                    id='departure'
                    placeholder='Dep'    
                />
                <Form.Label htmlFor='arrival' srOnly>
                    Arrival
                </Form.Label>
                <Form.Control
                    className='mb-2 mr-sm-2'
                    id='arrival'
                    placeholder='Arr'    
                />
                <Form.Label htmlFor='depDate' srOnly></Form.Label>
                <Form.Control className='mb-2 mr-sm-2' type='date' id='depDate' name='depDate' placeholder='Departure Date' />
                <Form.Label htmlFor='retDate' srOnly></Form.Label>
                <Form.Control className='mb-2 mr-sm-2' type='date' id='retDate' name='retDate' placeholder='Return Date' />
                <Form.Label htmlFor='passenger' srOnly></Form.Label>
                <Form.Control className='mb-2 mr-sm-2' as='select'>
                    <option>Adults </option>
                    <option>Children under 12 years</option>
                    <option>Infents under 2 years</option>
                </Form.Control>
                <Button variant='light' className='mb-2 mr-sm-2'>Search</Button>
            </Form>
        );
    }
}

export default BookingForm;
