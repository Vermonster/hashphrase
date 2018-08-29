import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import BaseNotification from '../components/BaseNotification';

configure({ adapter: new Adapter() });

const innerText = 'Testing message';

// * the component should render
// * the component should render the correct message

describe('<BaseNotification />', () => {
  // the below snapshot works, but shouldn't solidify snapshots until later.
  it('should render the same snapshot', () => {
    const tree = renderer.create(<BaseNotification message={innerText} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the text passed in', () => {
    const wrapper = shallow(<BaseNotification message={innerText} />);
    expect(wrapper.find(Text)).toHaveLength(1);
  });
});
