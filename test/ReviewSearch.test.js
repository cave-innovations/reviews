import { shallow } from 'enzyme';
import React from 'react';
import ReviewSearch from '../client/components/ReviewSearch';

describe('Test ReviewSearch', () => {
  it('works', () => {
    const wrap = shallow(
      <ReviewSearch />
    );
    expect(wrap.state()).toBeDefined();
  });

  it('has a Search button', () => {
    const wrap = shallow(
      <ReviewSearch />
    );

    expect(wrap.find('button').text()).toEqual('Search');
  });

});


