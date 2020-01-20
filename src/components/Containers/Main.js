import React, { Component } from 'react';
import images from '../../data';
import Card from '../Game/Card';

export default class Main extends Component {
  // X json file full of cards with images
  // X render card component
  // card hasClicked = false by default
  // onclick => set card to be true
  // card needs an id, image

  state = {
    cards: []
  };

  componentDidMount() {
    this.setState({ cards: images }, () => {
      this.setState({ cards: this.shuffleArray(this.state.cards) });
    });
  }

  cardClicked = id => {
    console.log('card clicked', id);
    this.checkCard(id);
  };

  checkCard = id => {
    // find the card and set it to true
    const cards = this.state.cards.map(card => {
      if (card._id === id && !card.clicked) {
        card.clicked = true;
        // update message
        this.props.setMessage('Correct!');

        // update current points
        this.props.incrementScore();
      } else if (card._id === id && card.clicked) {
        this.resetGame();
      }
      return card;
    });

    // update state
    this.setState({ cards });
  };

  shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    console.log('shuffled arr :', arr);
    return arr;
  };

  resetCards = () => {
    const cards = this.state.cards.map(card => {
      card.clicked = false;
    });

    this.setState({ cards });
  };

  resetGame = () => {
    this.resetCards();
    this.props.resetScore();
    this.props.setMessage('Incorrect! Starting over...');
    this.setState({ cards: this.shuffleArray(this.state.cards) });
  };

  render() {
    return (
      <main className='container'>
        <div className='row'>
          {images.map(image => {
            return <Card key={image._id} image={image} cardClicked={this.cardClicked} />;
          })}
        </div>
      </main>
    );
  }
}
