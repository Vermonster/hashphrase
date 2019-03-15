import React from 'react';
import { shallow } from 'enzyme';
import { TestFlowScreen as FlowScreen } from '../src/navigation/screens/FlowScreen';

describe('<FlowScreen />', () => {
  it('should render the same snapshot', () => {
    const navigation = { navigate: jest.fn() };
    const wrapper = shallow(<FlowScreen t={key => key} navigation={navigation} />);
    expect(wrapper).toMatchSnapshot();
  });
});
