import React from 'react';
import Container from './container';
import { shallow } from 'enzyme';
import ExerciseTable from './exerciseTable-Component/exerciseTable';


describe('Container', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Container />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('Should render the exerciseTable componenent', () => {
    expect(wrapper.containsMatchingElement(<ExerciseTable />)).toEqual(true);
  });
});