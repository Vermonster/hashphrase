import React from 'react';
import { shallow } from 'enzyme';
import { Text, Card } from 'react-native-paper';
import BaseNotification from '../src/components/BaseNotification';

const innerText = 'Testing message';

describe('<BaseNotification />', () => {
  it('should match the existing snapshot', () => {
    const wrapper = shallow(<BaseNotification message={innerText} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the the correct components', () => {
    const requiredComponents = [Text, Card];
    const wrapper = shallow(<BaseNotification message={innerText} />);
    requiredComponents.forEach((component) => {
      expect(wrapper.find(component)).toHaveLength(1);
    });
  });

  it('should render message prop within nested Text component', () => {
    const notification = 'This is a test notification';
    const wrapper = shallow(<BaseNotification message={notification} />);
    const text = wrapper.find(Text);
    expect(text.props().children).toEqual(notification);
  });
});
