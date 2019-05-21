import React from 'react';
import { shallow } from 'enzyme';
import Tracker from './tracker.js';

describe('Tracker', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Tracker />));
  
    it('should render a <div />', () => {
      expect(wrapper.find('div').length).toEqual(1);
    });
  });