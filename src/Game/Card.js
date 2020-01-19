import React from 'react';

export default function Card(props) {
  return (
    <div className='col-3 mb-4'>
      <div className='card'>
        <img
          className='card-img-top'
          src={props.image.source}
          onClick={() => props.cardClicked(props.image._id)}
        />
      </div>
    </div>
  );
}
