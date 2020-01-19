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
    this.setState({ cards: images });
  }

  cardClicked = id => {
    console.log('card clicked', id);
    this.setCardStatus(id);
  };

  setCardStatus = id => {
    // find the card and set it to true
    const cards = this.state.cards.map(card => {
      if (card._id === id && !card._clicked) {
        card.clicked = true;
        // update current points
        this.props.incrementScore();
        // check top score then update
        if (this.props.score > this.props.topScore) {
          this.props.setTopScore();
        }
      } else {
        // restart game
        this.resetGame();
      }

      return card;
    });

    // update state
    this.setState({ cards });
  };

  shufflArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  resetGame = () => {
    this.props.resetScore();
    this.setState({ cards: this.shufflArray(this.state.cards) });
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
