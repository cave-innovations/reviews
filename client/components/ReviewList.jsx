import React from 'react';
import Review from './Review.jsx';
import styled from 'styled-components';

const Block = styled.div `
  display: block;
  clear: both;
`;

const ReviewList = (props) => {
  return (
  	<Block>
			{props.reviews.map(review =>
			<Review key={review.id} review={review}/>
			)}
		</Block>
	);
};

export default ReviewList;