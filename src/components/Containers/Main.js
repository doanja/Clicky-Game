import React, { Component } from 'react';
import images from '../../data';
import Card from '../Game/Card';

export default class Main extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    this.setState({ cards: images });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cards !== this.state.cards) {
      const cards = this.state.cards;
      this.shuffleArray(this.state.cards);

      this.setState({ cards });
    }
  }

  cardClicked = id => {
    const cards = this.state.cards.map(card => {
      // card has not been clicked
      if (card._id === id && !card.clicked) {
        card.clicked = true;
        this.props.incrementScore();
      }
      // card has been clicked already
      else if ((card._id === id && card.clicked) || this.props.score === 11) {
        console.log('reset');
        this.resetGame();
      }

      return card;
    });

    this.setState({
      cards
    });
  };

  resetGame = () => {
    // copy the cards from state
    const cards = [...this.state.cards];

    cards.forEach(card => {
      card.clicked = false;
    });

    this.setState({ cards }, () => {
      this.props.resetScore();
    });
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  render() {
    return (
      <main className='container'>
        <div className='row'>
          {this.state.cards.map(image => {
            return <Card key={image._id} image={image} cardClicked={this.cardClicked} />;
          })}
        </div>
      </main>
    );
  }
}
