import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section `
  padding: 4em;
  background: papayawhip;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: 3,
      listing: [],
      reviews: [],
      responses: []
    };
  }

  componentDidMount() {
    axios.all([
      axios.get('/api/listings', {params: {listingId: this.state.listingId}}),
      axios.get('/api/reviews', {params: {listingId: this.state.listingId}})
    ])
      .then(axios.spread( (listing, reviews) => {
        // Both requests are now complete
        this.setState({
          listing: listing.data,
          reviews: reviews.data
        });
      }))
      .catch(error => console.log(error));
  }

  render() {
    const {listingId, listing, reviews, responses} = this.state;
    return (
      <div>
        <Wrapper>
          <Title>Hello World</Title>
        </Wrapper>
        {reviews.length && <ReviewList reviews={reviews}/>}
      </div>

    );
  }
}

export default App;