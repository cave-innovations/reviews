import React from 'react';
import moment from 'moment';
import styled from 'styled-components';


const Div1 = styled.div `
  display:inline-block;
  vertical-align:top;
  padding-right: 20px;
`;
const Div2 = styled.div `
  display:inline-block;
`;
const Image = styled.img `
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const Hr = styled.hr `
background-color: #eee;
border: 0 none;
color: #eee;
height: 1px;
`;
const U = styled.span `
  color: rgb(0, 132, 137);
`;
const More = styled.span `
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  };
`;

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      maxWords: 250,
    };

    this.onToggle = this.onToggle.bind(this);
    this.showMore = this.showMore.bind(this);
  }

  onToggle() {
    this.setState({isOpen: !this.state.isOpen});
  }

  showMore() {
    return this.state.isOpen ? this.props.review.Review : this.props.review.Review.slice(0, this.state.maxWords);
  }

  render() {
    return (
      <div>
        <div>
          <Div1>
            <Image src={this.props.review.Image_Url}/>
          </Div1>
          <Div2>
            <div><b>{this.props.review.Traveler_FirstName}</b></div>
            <div>{moment(this.props.review.Date.slice(0, 10).replace(/-/g, '')).format('MMMM YY')}</div>
          </Div2>
        </div>
        <p>
          {this.showMore()}
          <a onClick={this.onToggle}><U>{this.props.review.Review === this.showMore() ? '' : <More>Read more</More>}</U></a>
        </p>
        <Hr />
      </div>
    );
  }
}

export default Review;
