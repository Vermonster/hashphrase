import React from 'react';
import { shallow } from 'enzyme';
import { Button, Text } from 'react-native-paper';
import BaseButton from '../components/BaseButton';

const mock = jest.fn();
const innerText = 'Generate Password';

describe('<BaseButton />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<BaseButton onPress={mock} buttonText={innerText} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the correct components', () => {
    const wrapper = shallow(<BaseButton onPress={mock} buttonText={innerText} />);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Text)).toHaveLength(1);
  });

  it('should render text prop within nested Text component', () => {
    const wrapper = shallow(<BaseButton onPress={mock} buttonText={innerText} />);
    const text = wrapper.find(Text);
    expect(text.props().children).toEqual(innerText);
  });

  it('should execute onPress function', () => {
    const onPressEvent = jest.fn();
    onPressEvent.mockReturnValue('onPress invoked');
    const wrapper = shallow(<BaseButton onPress={onPressEvent} buttonText={innerText} />);
    wrapper.find(Button).simulate('press');
    expect(onPressEvent.mock.calls.length).toBe(1);
  });
});
