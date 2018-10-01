import React from 'react';
import { shallow } from 'enzyme';
import InfoScreen from '../src/navigation/screens/InfoScreen';

// currently a placeholder component for future expert tips/info screen
describe('<InfoScreen />', () => {
  it('should render the same snapshot', () => {
    const wrapper = shallow(<InfoScreen />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
