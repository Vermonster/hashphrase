import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import {
  Container, Body, Title, Header, Content, Footer,
} from 'native-base';
import App from '../App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should render the same snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  // vicki: use of below versus above?
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('contains all of the required components', () => {
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
});
