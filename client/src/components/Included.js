import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

import includedImg from '../img/includedImg.jpg';

const IncludedStyling = styled.section`
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
        text-align: center;
        color: white;
        font-size: 30pt;
        font-weight: 200;
        margin-bottom: 40px;

        h3 {
            font-size: 15pt;
            font-weight: 500;
        }
    }
`;

const ScrollStyle2 = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: -1;
    position: absolute;    
    
    img {
        height: 100vh;
        width: 100%;
    }
`;

const SideDivStyle = styled.div`
    display: flex;
    flex-direction; column;
    justify-content: center;
    text-align: center;
    color: white;
    font-weight: 200;

    h3 {
        font-size: 15pt;
        font-weight: 500;
    }

    .sideOne {
        width: 40%;
    }
    .sideTwo {        
        width: 40%;
    }
`;

class WhatsIncluded extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <IncludedStyling>
                <ScrollStyle2>
                    <Parallax y={[-60, 60]} className='scrollFilter'>
                        <img src={includedImg} />
                    </Parallax>
                </ScrollStyle2>
                <div className='container'>
                    <h3>WHAT'S INCLUDED</h3>
                    <p>Our training course will provide a simple, powerful, and affordable all in one complete solution to get you started on the web.</p>
                </div>
                <SideDivStyle>
                    <div className='sideOne'>
                        <h3>ENJOY THE RAW POWER</h3>
                        <p>Speed, Uptime and security, blah blah blah</p>
                    </div>
                    <div className='sideTwo'>
                        <h3>THE PERFECT CONTENT FRAME</h3>
                        <p>Once you start with a basic look and feel, it is time to start creating the perfect frame to let your content shine. Do not settle for cookie cutter when you can customize every aspect of your site until it looks and functions just right.</p>
                    </div>
                </SideDivStyle>
            </IncludedStyling>
        );
    }
}

export default WhatsIncluded;
