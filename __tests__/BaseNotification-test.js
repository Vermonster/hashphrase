import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import {
  Text, Card, CardItem, Body,
} from 'native-base';
import BaseNotification from '../components/BaseNotification';

configure({ adapter: new Adapter() });

const innerText = 'Testing message';

describe('<BaseNotification />', () => {
  it('should match the existing snapshot', () => {
    const wrapper = shallow(<BaseNotification message={innerText} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the the correct components', () => {
    const requiredComponents = [Text, Card, CardItem, Body];
    const wrapper = shallow(<BaseNotification message={innerText} />);
    requiredComponents.forEach((component) => {
      expect(wrapper.find(component)).toHaveLength(1);
    });
  });
});
