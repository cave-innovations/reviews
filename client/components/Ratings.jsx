import React from 'react';
import styled from 'styled-components';
import Rating from './Rating.jsx';

const Hr = styled.hr `
    background-color: #eee;
    border: 0 none;
    color: #eee;
    height: 1px;
`;
const Rating1 = styled.div `
    float:left;
`;

const Rating2 = styled.div `
    float: right;
`;
const Block = styled.div `
    display: block;
    clear: both;
`;

const Ratings = (props) => {
    const ratings1 = [];
    const ratings2 = [];
    const accuracy = props.ratings.map(a => a.Rating_Accuracy).reduce((a, b) => a + b) / props.ratings.length;
    const checkin = props.ratings.map(a => a.Rating_CheckIn).reduce((a, b) => a + b) / props.ratings.length;
    const cleanliness = props.ratings.map(a => a.Rating_Cleanliness).reduce((a, b) => a + b) / props.ratings.length;
    const communication = props.ratings.map(a => a.Rating_Communication).reduce((a, b) => a + b) / props.ratings.length;
    const location = props.ratings.map(a => a.Rating_Location).reduce((a, b) => a + b) / props.ratings.length;
    const value = props.ratings.map(a => a.Rating_Value).reduce((a, b) => a + b) / props.ratings.length;
    ratings1.push({accuracy}, {communication}, {cleanliness});
    ratings2.push({location}, {checkin}, {value});

    return (
        <Block>
        <Rating1>
                {ratings1.map((rating, i) =>
            <Rating key={i} rating={rating}/>
            )}
        </Rating1>
        <Rating2>
            {ratings2.map((rating, i) =>
            <Rating key={i} rating={rating}/>
            )}
        </Rating2>
        </Block>
    );
};

export default Ratings;