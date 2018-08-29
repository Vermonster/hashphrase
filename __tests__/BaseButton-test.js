import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import { Button, Text } from 'native-base';
import BaseButton from '../components/BaseButton';

configure({ adapter: new Adapter() });

// things to test
// *contains Text component (shallow rendering is not reaching this)
// *has full=true prop, has onPress function prop
// *onPress function prop is called when button is pushed
// require('react-native-mock/mock'); --> if doing e2e tests

// Questions:
// ? From where is a <View /> component being wrapped around my code?

const mock = jest.fn();
const innerText = 'Generate Password';

describe('<BaseButton />', () => {
  // the below snapshot works, but shouldn't solidify snapshots until later.
  it('should render the same snapshot', () => {
    const tree = renderer.create(<BaseButton onPress={mock} buttonText={innerText} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a Button component', () => {
    const wrapper = shallow(<BaseButton onPress={mock} buttonText={innerText} />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should render a Text component', () => {
    const tree = renderer.create(
      <BaseButton onPress={mock} buttonText={innerText}>
        <Button>
          <Text>{ innerText }</Text>
        </Button>
      </BaseButton>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should execute onPress function', () => {
    const onPressEvent = jest.fn();
    onPressEvent.mockReturnValue('onPress invoked');
    const wrapper = shallow(<BaseButton onPress={onPressEvent} buttonText={innerText} />);
    wrapper.find(Button).first().props().onPress();
    expect(onPressEvent.mock.calls.length).toBe(1);
  });
});
