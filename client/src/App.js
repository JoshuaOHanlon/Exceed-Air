import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle.js';
import Nav from './components/Nav.js';
import Layout from './components/Layout.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      animate: true,
      airports: []
    }

    this.getAirports = this.getAirports.bind(this);
  }

  getAirports(airport) {
    axios.get(`http://localhost:8000/airports/db/${airport}`)
      .then((res) => {
        this.setState({ airports: res });
      });
  }

  render() {
    return(
      <Router>
        <div className='App'>
          <GlobalStyle />
          <Nav />
          <Layout animate={this.state.animate} getAirports={this.getAirports} />
        </div>
      </Router>
    );
  }
}

export default App;
