import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import GlobalStyle from './styles/GlobalStyle.js';
import Nav from './components/Nav.js';
import Layout from './components/Layout.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      animate: true
    }
  }

  render() {
    return(
      <Router>
        <div className='App'>
          <GlobalStyle />
          <Nav />
          <Layout animate={this.state.animate} />
        </div>
      </Router>
    );
  }
}

export default App;
