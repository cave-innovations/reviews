import {shallow, mount, render} from 'enzyme';
import React from 'react';
import OverallRating from '../client/components/OverallRating';

describe('Testing the state of OverallRating', () => {
  it('should expect OverallRating to exist', () => {
    const wrap = shallow(
      <OverallRating/>
    );
    expect(wrap.exists()).toBe(true);
  });

  it('should expext OverallRating props to be an array', () => {
    const wrap = shallow(
      <OverallRating/>
    );
    expect(typeof(wrap.props())).toBe('array');
  });
});