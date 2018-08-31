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
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });
  it('contains all of the required components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Container)).toHaveLength(1);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Content)).toHaveLength(1);
    expect(wrapper.find(Body)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
