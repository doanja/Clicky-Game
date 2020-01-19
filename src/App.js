import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Containers/Navbar';
import Footer from './components/Containers/Footer';
import Main from './components/Containers/Main';

export default class App extends Component {
  state = {
    message: '',
    score: 0,
    topScore: 0
  };

  render() {
    return (
      <React.Fragment>
        <Navbar message={this.state.message} />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}
