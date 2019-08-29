import {shallow, mount, render} from 'enzyme'
import React from 'react'
import App from '../client/components/App'


describe('Testing the state of App', () => {
  it('should expect the state of app to exist', () => {
    const wrap = shallow(
      <App/>
    )
    expect(wrap.state()).toBeDefined()
  })

  it('should expect the state to have properties listingId, listing, reviews, responses, ratings, searchedTerm', () => {
    const wrap = shallow(<App/>)
    expect(wrap.state()).toHaveProperty('listingId')
    expect(wrap.state()).toHaveProperty('listing')
    expect(wrap.state()).toHaveProperty('reviews')
    expect(wrap.state()).toHaveProperty('responses')
    expect(wrap.state()).toHaveProperty('ratings')
    expect(wrap.state()).toHaveProperty('searchedTerm')
  })

})



// it('componentDidMount should set the state of App', () => {
//   const wrappper = shallow(<App />)
//   wrappper.instance().componentDidMount().then(() => {
//     expect(axios.get).toHaveBeenCalled();
//     expect(wrappper.state()).toHaveProperty('listingId')
//   })
// })