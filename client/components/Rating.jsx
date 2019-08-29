import React from 'react';
import styled from 'styled-components'
const _ = require('lodash')


const Star1 = styled.span `
  color: lightseagreen
`
const Star2 = styled.span `
  color: lightgrey
`

const StarHalf = styled.span `
`

const Rating = (props) => {
  const key = Object.keys(props.rating)
  if(Math.floor(props.rating[key[0]])===1) {
    return (
      <p>
          {_.capitalize(key)}:<Star1>★</Star1><Star2>★</Star2><Star2>★</Star2><Star2>★</Star2><Star2>★</Star2>
          {/* <span className="star-icon half">★</span> */}
      </p>
      )
  }

  else if(Math.floor(props.rating[key[0]])===2) {
    return (
      <p>
          {_.capitalize(key)}:<Star1>★</Star1><Star1>★</Star1><Star2>★</Star2><Star2>★</Star2><Star2>★</Star2>
      </p>
      )
  }

  else if(Math.floor(props.rating[key[0]])===3) {
    return (
      <p>
          {_.capitalize(key)}:<Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star2>★</Star2><Star2>★</Star2>
      </p>
      )
  }

  else if(Math.floor(props.rating[key[0]])===4) {
    return (
      <p>
          {_.capitalize(key)}:<Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star2>★</Star2>
      </p>
      )
  }

  else if(Math.floor(props.rating[key[0]])===5) {
    return (
      <p>
          {_.capitalize(key)}:<Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1><Star1>★</Star1>
      </p>
      )
  }

}

export default Rating;
