import React from 'react';
import { shallow } from 'enzyme';
import FlowScreen from '../src/navigation/screens/FlowScreen';

describe('<FlowScreen />', () => {
  it('should render the same snapshot', () => {
    const mock = jest.fn();
    const wrapper = shallow(<FlowScreen />);
    wrapper.setProps({ navigation: { navigate: mock } });
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
