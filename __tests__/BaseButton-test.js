import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import { Button, Text } from 'native-base';
import BaseButton from '../components/BaseButton';

configure({ adapter: new Adapter() });

const mock = jest.fn();
const innerText = 'Generate Password';

describe('<BaseButton />', () => {
  it('should deep render without crashing', () => {
    const tree = renderer.create(<BaseButton onPress={mock} buttonText={innerText} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should shallow render without crashing', () => {
    const wrapper = shallow(<BaseButton onPress={mock} buttonText={innerText} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render the correct components', () => {
    const wrapper = shallow(<BaseButton onPress={mock} buttonText={innerText} />);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Text)).toHaveLength(1);
  });

  it('should execute onPress function', () => {
    const onPressEvent = jest.fn();
    onPressEvent.mockReturnValue('onPress invoked');
    const wrapper = shallow(<BaseButton onPress={onPressEvent} buttonText={innerText} />);
    wrapper.find(Button).simulate('press');
    expect(onPressEvent.mock.calls.length).toBe(1);
  });
});
