import React from 'react';
import styled from 'styled-components';


const Image = styled.img `
  height: 50px;
  width: 50px;
  border-radius:50%
`;

const Hr = styled.hr `
background-color: #eee;
border: 0 none;
color: #eee;
height: 1px;
`

const Review = (props) => (
  <div>
    <section>
      <p>
        <Image src={props.review.Image_Url}/>
        <b>{props.review.Traveler_FirstName}</b>
      </p>
      <p>
        {props.review.Date.slice(0, 10)}
      </p>
    </section>
    <p>
      {props.review.Review}
    </p>
    <Hr />
  </div>
);

export default Review;
