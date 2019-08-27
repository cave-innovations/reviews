import React from 'react';
import Review from './Review.jsx';

const ReviewList = (props) => {
  return (
    <ul>
      {props.reviews.map(review =>
        <Review key={review.id} review={review}/>
      )}
    </ul>
  );
};



export default ReviewList;