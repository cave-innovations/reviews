import {shallow, mount, render} from 'enzyme';
import React from 'react';
import Ratings from '../client/components/ratings';


describe('Testing Ratings', () => {
  it('should props of Ratings to exist', () => {
    const wrap = shallow(
      <Ratings/>
    );
    expect(wrap.props()).toBeDefined();
  });

});
