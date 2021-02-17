import React from 'react';
import styled from 'styled-components';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
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
                <Form.Label htmlFor='depDate' srOnl></Form.Label>
                <Form.Control className='mb-2 mr-sm-2' type='date' id='depDate' name='depDate' placeholder='Departure Date' />
                <Form.Label htmlFor='retDate' srOnl></Form.Label>
                <Form.Control className='mb-2 mr-sm-2' type='date' id='retDate' name='retDate' placeholder='Return Date' />
                <Button variant='light' className='mb-2 mr-sm-2'>Search</Button>
            </Form>
        );
    }
}

export default BookingForm;
