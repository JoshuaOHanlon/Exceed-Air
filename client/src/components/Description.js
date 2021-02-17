import React from 'react';
import styled from 'styled-components';

import cirrus from '../img/cirrus2.jpg';

const DescStyling = styled.section`
    display: flex;
    flex-direction: cloumn;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 150vh;
    width: 100%;
    background-color: white;
    z-index: 5;
`;

const DescImgStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    img {
        height: 70%;
        width: 80%;
    }
`;

const DescContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 15pt;
    width: 100%;
    margin-top: 80px;

    h3 {
        font-weight: bold;
        font-size: 10pt;
    }
    h2 {
        font-weight: 200;
    }
`;

class Desc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DescStyling>
                <DescContainerStyle>
                    <h3>HOW IT WORKS</h3>
                    <h2>Your Personal Air Travel Service</h2>
                </DescContainerStyle>
                <DescImgStyle>
                    <img src={cirrus} />
                </DescImgStyle>  
            </DescStyling>
        );
    }
}

export default Desc;
