import React from 'react';
import { shallow } from 'enzyme';
import {
  Container, Body, Title, Header, Content, Footer,
} from 'native-base';
import App from '../App';

describe('<App />', () => {
  it('should render the same snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain all of the required components', () => {
    const wrapper = shallow(<App />);
    const requiredComponents = [
      Container,
      Title,
      Header,
      Content,
      Body,
      Footer,
    ];

    requiredComponents.forEach((component) => {
      expect(wrapper.find(component)).toHaveLength(1);
    });
  });

  it('should toggle state when showNotification() called', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(wrapper.state().showCopy).toEqual(false);
    instance.showNotification();
    expect(wrapper.state().showCopy).toEqual(true);
  });
});
