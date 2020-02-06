import React from 'react';
import styled from 'styled-components';

const Star1 = styled.span `
    color: rgb(0, 132, 137);
`;
const Star2 = styled.span `
    color: lightgrey;
`;

const OverallRating = (props) => {
    var sum = 0;

    props.ratings.forEach(a => sum += (a.Rating_Accuracy + a.Rating_CheckIn + a.Rating_Cleanliness + a.Rating_Communication + a.Rating_Location + a.Rating_Value));

    //average rating
    var rating = Math.floor(sum/(props.ratings.length * 6));

    if (rating === 1) {
        return (
            <span>
                <Star1>★</Star1><Star2>★</Star2><Star2>★</Star2><Star2>★</Star2><Star2>★</Star2>
            </span>
        );
    } else if (rating === 2) {
        return (
            <span>
                <Star1>★</Star1><Star1>★</Star1><Star2>★</Star2><Star2>★</Star2><Star2>★</Star2>
            </span>
        );
    } else if (rating === 3) {
        return (
            <span>
                <Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star2>★</Star2><Star2>★</Star2>
            </span>
    );
    } else if (rating === 4) {
        return (
            <span>
                <Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star2>★</Star2>
            </span>
        );
    } else if (rating === 5) {
        return (
            <span>
                <Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1>
            </span>
        );
    }
};

export default OverallRating;
