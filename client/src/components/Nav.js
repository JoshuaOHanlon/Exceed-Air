import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: top 1s;
  transition: background-color 1s;
  padding: 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LinksContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ol {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  ul {
    margin-left: 10px;
    color: white;
    font-size: 10pt;
    font-weight: 200;
  }
`;

const linksArr = [
  {
    name: 'OVERVIEW',
    url: 'overview'
  },
  {
    name: 'FEATURES',
    url: 'features'
  },
  {
    name: 'PRICING',
    url: 'pricing'
  },
  {
    name: 'TESTIMONIALS',
    url: 'testimonials'
  },
  {
    name: 'FAQS',
    url: 'faqs'
  },
  {
    name: 'SIGN UP',
    url: 'signup'
  }
]

class Nav extends React.Component {
  constructor(props) {
    super(props)

    if (typeof window !== 'undefined') {
      let prevPos = window.pageYOffest;
      window.onscroll = () => {
        const max = document.body.clientHeight - window.innerHeight;
        let currentPos = window.pageYOffset;
        if (
          (max > 0 && prevPos > currentPos && prevPos <= max)
          || (max <= 0 && prevPos > currentPos)
            || (prevPos <= 0 && currentPos <= 0)
        ) {
          document.getElementById('nav').style.top = '0';
          document.getElementById('nav').style.backgroundColor = '';
          
        } else {
          document.getElementById('nav').style.top = '-0.5rem';
          document.getElementById('nav').style.backgroundColor = 'black'      
        }
        prevPos = currentPos;
      }
    }
  }

  render() {
    return(
      <NavContainer id='nav'>
        <LogoContainer>
          <p>LOGO HERE</p>
        </LogoContainer>
        <LinksContainer>
          <ol>
            {linksArr.map(({ url, name }, i) => (
              <ul key={i} >
                <Link to={url} smooth={true} duration={500}>{name}</Link>
              </ul>
            ))}
          </ol>        
        </LinksContainer>
      </NavContainer>
    );
  }
}

export default Nav;
