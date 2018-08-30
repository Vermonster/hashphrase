import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import { Text } from 'native-base';
import BaseNotification from '../components/BaseNotification';

configure({ adapter: new Adapter() });

const innerText = 'Testing message';

describe('<BaseNotification />', () => {
  it('should match the existing snapshot', () => {
    const tree = renderer.create(<BaseNotification message={innerText} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the text passed in', () => {
    const wrapper = shallow(<BaseNotification message={innerText} />);
    expect(wrapper.find(Text)).toHaveLength(1);
  });
});
