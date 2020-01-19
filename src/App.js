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

  setMessage = msg => {
    this.setState({ message: msg });
  };

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  setTopScore = score => {
    this.setState({ topScore: score });
  };

  resetScore = () => {
    this.setState({ score: 0 });
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
          setMessage={this.setMessage}
          incrementScore={this.incrementScore}
          setTopScore={this.setTopScore}
          resetScore={this.resetScore}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
