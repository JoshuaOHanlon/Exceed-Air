import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    width: 100%;
    z-index: 5;
    background-color: #5e79a8;
`;

const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 125px;
    witdth: 100%;
    z-index: 5;
    background-color: black;
    color: white;
`;

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <FooterStyle>
                    <h1>LOGO HERE</h1>
                </FooterStyle>
                <FooterLinks>
                    <p>Links</p>
                </FooterLinks>
            </div>            
        );
    }
}

export default Footer;
