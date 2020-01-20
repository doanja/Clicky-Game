import React, { Component } from 'react';
import images from '../../data';
import Card from '../Game/Card';

export default class Main extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    this.resetGame();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('component did update');
  //   if (prevState.cards !== this.state.cards) {
  //     this.setState({ cards: this.shuffleArray(this.state.cards) });
  //   }
  // }

  cardClicked = id => {
    console.log('clicked:', id);
    this.checkCard(id);
  };

  checkCard = id => {
    // copy the cards from state
    const cards = [...this.state.cards];

    // get the card that you clicked on
    const card = cards.splice(cards.indexOf(id), 1);

    // if the card hasnt been clicked
    if (!card[0].clicked) {
      // update card.clicked to true
      card[0].clicked = true;

      // update current points
      this.props.incrementScore();
    }
    // the card the user picked was already clicked...
    else {
      this.resetGame();
    }

    cards.push(card[0]);

    // update state
    this.setState({ cards });
  };

  resetGame = () => {
    this.setState({ cards: images }, () => {
      this.setState({ cards: this.shuffleArray(this.state.cards) });
      this.props.resetScore();
    });
  };

  shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
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
