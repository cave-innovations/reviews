import React from 'react';
import styled from 'styled-components';
const _ = require('lodash');


const Star1 = styled.span `
    color: rgb(0, 132, 137);
`;
const Star2 = styled.span `
    color: lightgrey;
`;

const Key = styled.span `
    padding-right: 50px;
`;
const Stars = styled.span `
    padding-left: 50px;
`;

const Rating = (props) => {
    const key = Object.keys(props.rating);
    if (Math.floor(props.rating[key[0]]) === 1) {
        return (
            <p>
                <Key>{_.capitalize(key)}</Key>
                <Stars><Star1>★</Star1><Star2>★</Star2><Star2>★</Star2><Star2>★</Star2><Star2>★</Star2></Stars>
            </p>
        );
    } else if (Math.floor(props.rating[key[0]]) === 2) {
        return (
            <p>
                <Key>{_.capitalize(key)}</Key>
                <Stars><Star1>★</Star1><Star1>★</Star1><Star2>★</Star2><Star2>★</Star2><Star2>★</Star2></Stars>
            </p>
        );
    } else if (Math.floor(props.rating[key[0]]) === 3) {
        return (
            <p>
                <Key>{_.capitalize(key)}</Key>
                <Stars><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star2>★</Star2><Star2>★</Star2></Stars>
            </p>
        );
    } else if (Math.floor(props.rating[key[0]]) === 4) {
        return (
            <p>
                <Key>{_.capitalize(key)}</Key>
                <Stars><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star2>★</Star2></Stars>
            </p>
        );
    } else if (Math.floor(props.rating[key[0]]) === 5) {
        return (
            <p>
                <Key>{_.capitalize(key)}</Key>
                <Stars><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1></Stars>
            </p>
        );
    }
};

export default Rating;
