import {shallow, mount} from 'enzyme';
import React from 'react';
import Review from '../client/components/Review';

describe('Testing the state of Review', () => {
  it('should expect Review to exist', () => {
    const wrap = shallow(
      <Review/>
    );
    expect(wrap.exists()).toBe(true);
  });
});