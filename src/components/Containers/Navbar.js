import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-dark text-white'>
        <a className='navbar-brand text-white' href='/'>
          Clicky Game
        </a>

        <ul className='mx-auto navbar-nav'>
          <li className='nav-item'>{this.props.message}</li>
        </ul>

        <ul className='navbar-nav float-right'>
          <li className='nav-item'>
            Score: {this.props.score} | Top Score: {this.props.topScore}
          </li>
        </ul>
      </nav>
    );
  }
}
