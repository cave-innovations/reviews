import React from 'react';
import styled from 'styled-components'

const Star1 = styled.span `
  color: lightseagreen
`
const Star2 = styled.span `
  color: lightgrey
`

const StarHalf = styled.span `
`

const OverallRating = (props) => {
  const overallRatings = []
  const accuracy = props.ratings.map(a => a.Rating_Accuracy).reduce((a,b) => a+b)/props.ratings.length
  const checkin = props.ratings.map(a => a.Rating_CheckIn).reduce((a,b) => a+b)/props.ratings.length
  const cleanliness = props.ratings.map(a => a.Rating_Cleanliness).reduce((a,b) => a+b)/props.ratings.length
  const communication = props.ratings.map(a => a.Rating_Communication).reduce((a,b) => a+b)/props.ratings.length
  const location = props.ratings.map(a => a.Rating_Location).reduce((a,b) => a+b)/props.ratings.length
  const value = props.ratings.map(a => a.Rating_Value).reduce((a,b) => a+b)/props.ratings.length
  overallRatings.push(accuracy, checkin, cleanliness, communication, location, value)
  const averageRating = Math.floor(overallRatings.reduce((a,b) => a+b)/overallRatings.length)

  if(averageRating===1) {
    return (
      <span>
          <Star1>★</Star1><Star2>★</Star2><Star2>★</Star2><Star2>★</Star2><Star2>★</Star2>
          {/* <span className="star-icon half">★</span> */}
      </span>
      )
  }

  else if(averageRating===2) {
    return (
      <span>
          <Star1>★</Star1><Star1>★</Star1><Star2>★</Star2><Star2>★</Star2><Star2>★</Star2>
      </span>
      )
  }

  else if(averageRating===3) {
    return (
      <span>
          <Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star2>★</Star2><Star2>★</Star2>
      </span>
      )
  }

  else if(averageRating===4) {
    return (
      <span>
          <Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star2>★</Star2>
      </span>
      )
  }

  else if(averageRating===5) {
    return (
      <span>
          <Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1>
      </span>
      )
  }

}

export default OverallRating;
