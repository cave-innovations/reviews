import React from 'react'
import styled from 'styled-components'

const Input = styled.input `
  border: 1px solid lightseagreen;
  width: 150px;
  height: 30px;
  border-radius: 5px;
`

const Button = styled.button `

`

class ReviewSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.value)

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input type="search" placeholder=" 🔍 Search Reviews" value={this.state.value} onChange={this.handleChange}></Input>
        </form>
      </div>
    )
  }
}


export default ReviewSearch;