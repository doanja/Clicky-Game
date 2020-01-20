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

  componentDidMount() {
    this.setState({ score: 0, topScore: 0, message: 'Pick a Card' });
  }

  incrementScore = () => {
    console.log('increment');
    this.setState({ score: this.state.score + 1, message: 'Correct!' }, () => {
      // update top score if...
      if (this.state.score >= this.state.topScore) {
        this.setTopScore(this.state.score);
      }
    });
  };

  setTopScore = score => {
    this.setState({ topScore: score });
  };

  resetScore = () => {
    console.log('reset');
    this.setState({ score: 0, message: 'Incorrect! Starting over...' });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Main
          score={this.state.score}
          topScore={this.state.topScore}
          incrementScore={this.incrementScore}
          resetScore={this.resetScore}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
