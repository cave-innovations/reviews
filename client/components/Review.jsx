import React from 'react';
import styled from 'styled-components';

const Image = styled.img `
  height: 100px;
  width: 100px;
`;

const Review = (props) => (
  <li>
    <section>
      <p>
        <img src={props.review.Image_Url} className="img"></img>
        <b>{props.review.Traveler_FirstName}</b>
      </p>
      <p>
        {props.review.Date.slice(0, 10)}
      </p>
    </section>
    <p>
      {props.review.Review}
    </p>
    {/* <Image>
      <img src={props.review.Image_Url}></img>
    </Image> */}
    {/* <img src={props.review.Image_Url}></img> */}
  </li>
);

export default Review;