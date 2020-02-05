import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import ReviewList from './ReviewList.jsx';
import Ratings from './Ratings.jsx';
import ReviewSearch from './ReviewSearch.jsx';
import OverallRating from './OverallRating.jsx';

//styling using styled-components
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
`;

const Block = styled.div `
	display: block;
	clear: both;
`;

const Div1 = styled.div `
	display:inline-block;
`;
const Div2 = styled.div `
	display:inline-block;
	float: right;
`;

const U = styled.span `
	color: lightseagreen;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	};
`;

const P1 = styled.p `
	float:left;
`;

const P2 = styled.p `
	float:right;
`;

const Page = styled.span `
	margin-right: 1em;
	font-size: 20px;
	color: rgb(0, 132, 137);
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	};
`;

const CurrentPage = styled.span `
	display: inline-block;
	height: 20px;
	width: 20px;
	border-radius: 10px;
	margin-right: 1em;
	text-align: center;
	font-size: 20px;
	background-color: rgb(0, 132, 137);
	color: white;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	};
`;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listingId: 1,
			listing: [],
			reviews: [],
			responses: [],
			ratings: [],
			searchedTerm: '',
			currentPage: 1,
			reviewsPerPage: 7,
		};

    this.handleSearch = this.handleSearch.bind(this);
    this.filterReviewsBySearchTerm = this.filterReviewsBySearchTerm.bind(this);
    this.backToAllReviews = this.backToAllReviews.bind(this);
    this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		//get requests: routes /listing and /review are used to get listing and listing reviews data respectively
		axios.all([
			axios.get('api/listing', {params: {listingId: this.state.listingId}}),
			axios.get('api/review', {params: {listingId: this.state.listingId}})
		])
		//both requests are now complete: spread is used to hangle multiple concurrent requests
    .then(axios.spread((listing, reviews) => {
    	this.setState({
        listing: listing.data,
        reviews: reviews.data,
				ratings: reviews.data
			});
		}))
		.catch(error =>
			console.log(error)
		);
	}

  //function to search for key word in reviews
	handleSearch(searchedTerm) {
		this.setState({searchedTerm});
	}

  	//function to filter the reviews on the searched term
  	filterReviewsBySearchTerm() {
    	return this.state.searchedTerm ? this.state.reviews.filter(review => review.Review.includes(this.state.searchedTerm)) : this.state.reviews;
  	}

  	//function to return to all reviews: essentially resetting searched term to empy string
  	backToAllReviews(event) {
    	event.preventDefault();
    	this.setState({searchedTerm: ''});
  	}

  	//function to implement pagination, helps to move across different pages
  	handleClick(event) {
    	window.scrollTo(0, 0);//scrolls to the top of page
    	this.setState({currentPage: Number(event.target.id)});
  	}

  	render() {
    	const indexOfLastReview = this.state.currentPage * this.state.reviewsPerPage;
    	const indexOfFirstReview = indexOfLastReview - this.state.reviewsPerPage;
    	const reviews = this.filterReviewsBySearchTerm();
    	const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    	//array to store the number of total pages based on number of reviews and reviews per pages
    	const pageNumbers = [];
    	for (let i = 1; i <= Math.ceil(reviews.length / this.state.reviewsPerPage); i++) {
			pageNumbers.push(i);
		}

    	//page number component: current page has a slight different styling than other pages to note the difference
    	const renderPageNumber = pageNumbers.map(number => {
      	return (
        	number === this.state.currentPage ?
          	<CurrentPage key={number} id={number} onClick={this.handleClick}>
            	{number}
          	</CurrentPage> :
          	<Page key={number} id={number} onClick={this.handleClick}>
            	{number}
			  </Page>
			);
		});
    //conditional rendering:

		//1st case: no searched term
		if(reviews.length === this.state.ratings.length) {
			return (
				<div>
          <Hr/>
          	<Block>
            <Div1>
              	<h2><b>{this.state.ratings.length} Reviews</b> {this.state.ratings.length && <OverallRating ratings={this.state.ratings}/>}</h2>
            </Div1>
            <Div2>
              <h2>
                <ReviewSearch handleSearch={this.handleSearch}/>
              </h2>
            </Div2>
          	</Block>
        	<Hr/>
					<div>
						{this.state.ratings.length && <Ratings ratings={this.state.ratings}/>}
					</div>
          <div>
            {reviews.length && <ReviewList reviews={currentReviews}/>}
          </div>
          <div>
            {renderPageNumber}
          </div>
				</div>
			);
    	//2nd case: searched term found in some of the reviews
    	} else if(reviews.length > 0) {
			  return (
  				<div>
            <Hr/>
            <Block>
              <Div1>
                <h2>
                  <b>{this.state.ratings.length} Reviews</b> {this.state.ratings.length && <OverallRating ratings={this.state.ratings}/>}
              	</h2>
            	</Div1>
              <Div2>
              	<h2><ReviewSearch handleSearch={this.handleSearch}/></h2>
            	</Div2>
          	</Block>
            <Hr/>
            <div>
              <P1>{reviews.length} guests have mentioned "<b>{this.state.searchedTerm}</b>"</P1>
              <P2>{this.state.searchedTerm && <a onClick={this.backToAllReviews}><U>Back to all reviews</U></a>}</P2>
            </div>
          	<div>
              {reviews.length && <ReviewList reviews={currentReviews}/>}
            </div>
            <div>
              {renderPageNumber}
          	</div>
        	  </div>
          );
      //3rd: search term not found in any of the reviews
      } else if(reviews.length === 0) {
        return (
          <div>
            <Hr/>
            <Block>
              <Div1>
                <h2>
                  <b>{this.state.ratings.length} Reviews</b>
                  {this.state.ratings.length && <OverallRating ratings={this.state.ratings}/>}
                  </h2>
              </Div1>
            	<Div2>
                <h2>
                  <ReviewSearch handleSearch={this.handleSearch}/>
              	</h2>
            	</Div2>
              </Block>
              <Hr/>
              <div>
                <P1>None of our guests have mentioned "<b>{this.state.searchedTerm}</b>"</P1>
            		<P2>
              		{this.state.searchedTerm && <a onClick={this.backToAllReviews}><U>Back to all reviews</U></a>}
            		</P2>
          		</div>
        		</div>
      );
    }
  }
}

export default App;
