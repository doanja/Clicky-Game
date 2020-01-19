import React, { Component } from 'react';
import images from '../../data';
import Card from '../../Game/Card';

export default class Main extends Component {
  // json file full of cards with images
  // render card component
  // card hasClicked = false by default
  // onclick => set card to be true
  // card needs an id, image

  state = {};

  componentDidMount() {
    images.forEach(image => {
      console.log('image :', image);
    });
  }

  cardClicked = id => {
    console.log('card clicked', id);
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {images.map(image => {
            return <Card key={image._id} image={image} cardClicked={this.cardClicked} />;
          })}
        </div>
      </div>
    );
  }
}
