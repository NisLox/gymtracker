import React from 'react';
import { shallow } from 'enzyme';
import ExerciseTable from './exerciseTable'
import AddExerciseButton from './addExerciseButton';
import InputResultsButton from './inputResultsButton';


describe('Container', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<ExerciseTable />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('Should render the addExerciseButton componenent', () => {
    expect(wrapper.containsMatchingElement(<AddExerciseButton />)).toEqual(true);
  });

  it('Should render the inputResultsButton componenent', () => {
    expect(wrapper.containsMatchingElement(<InputResultsButton />)).toEqual(true);
  });
});