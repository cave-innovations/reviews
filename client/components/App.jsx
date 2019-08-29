import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Ratings from './Ratings.jsx';
import ReviewSearch from './ReviewSearch.jsx';
import OverallRating from './OverallRating.jsx'

const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section `
  padding: 4em;
  background: papayawhip;
`;

const Hr = styled.hr `
  background-color: #eee;
  border: 0 none;
  color: #eee;
  height: 1px;
`
const Header = styled.div `
  right: 100px;
  left: 100;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: 3,
      listing: [],
      reviews: [],
      responses: [],
      ratings: [],
      searchedTerm: '',
    };

    this.handleSearch = this.handleSearch.bind(this)
    this.filterReviewsBySearchTerm = this.filterReviewsBySearchTerm.bind(this)
  }

  componentDidMount() {
    axios.all([
      axios.get(`/api/listing`, {params: {listingId: this.state.listingId}}),
      axios.get(`/api/review`, {params: {listingId: this.state.listingId}})
    ])
      .then(axios.spread( (listing, reviews) => {
        // Both requests are now complete
        this.setState({
          listing: listing.data,
          reviews: reviews.data,
          ratings: reviews.data
        });
      }))
      .catch(error => console.log(error));
  }

  handleSearch(searchedTerm) {
    this.setState({searchedTerm})
  }

  filterReviewsBySearchTerm() {
    return this.state.searchedTerm? this.state.reviews.filter(review => review.Review.includes(this.state.searchedTerm)):this.state.reviews
  }

  render() {
    // const {listingId, listing, reviews, responses} = this.state;
    const reviews = this.filterReviewsBySearchTerm()

    if(reviews.length === this.state.ratings.length) {
      return(
        <div>
          <Header>
            <h2><b>{this.state.ratings.length} Reviews</b> {this.state.ratings.length && <OverallRating ratings={this.state.ratings}/>}</h2>
            <ReviewSearch handleSearch={this.handleSearch}/>
          </Header>
          <p>
            {this.state.ratings.length && <Ratings ratings={this.state.ratings}/>}
          </p>
          <div>
          {reviews.length && <ReviewList reviews={reviews}/>}
          </div>
        </div>
      )
    }
    else if(reviews.length>0){
      return (
        <div>
          <p>
            <b>{this.state.ratings.length} Reviews</b>
            {this.state.ratings.length && <OverallRating ratings={this.state.ratings}/>}
            <ReviewSearch handleSearch={this.handleSearch}/>
          </p>
          <Hr />
          <p>
            {reviews.length} guests have mentioned "<b>{this.state.searchedTerm}</b>"
          </p>
          {reviews.length && <ReviewList reviews={reviews}/>}
        </div>
      );
    }

    else if(reviews.length===0){
      return (
        <div>
          <p>
            <b>{this.state.ratings.length} Reviews</b>
            {this.state.ratings.length && <OverallRating ratings={this.state.ratings}/>}
            <ReviewSearch handleSearch={this.handleSearch}/>
          </p>
          <Hr/>
          <p>
            None of our guests have mentioned "<b>{this.state.searchedTerm}</b>"
          </p>
          <Hr/>
        </div>
      );
    }

  }
}

export default App;