import React from 'react';
import { shallow } from 'enzyme';
import { TestCreatePassword as CreatePassword } from '../src/navigation/screens/CreatePassword';

let wrapper;
let instance;

beforeEach(() => {
  wrapper = shallow(
    <CreatePassword
      t={key => key}
    />,
  );
  instance = wrapper.instance();
});

describe('<CreatePassword />', () => {
  it('should render the same snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call clearClipboard() when clipboard-clear button pressed', () => {
    const spy = jest.spyOn(instance, 'clearClipboard');
    instance.forceUpdate();
    wrapper.findWhere(node => node.prop('testID') === 'clipboard-clear').simulate('press');
    expect(spy).toHaveBeenCalled();
  });

  it('should update snackbarVisibility state to "true" when clipboard-clear button is pressed', () => {
    expect(instance.state.snackbarVisibility).toBe(false);
    wrapper.findWhere(node => node.prop('testID') === 'clipboard-clear').simulate('press');
    expect(instance.state.snackbarVisibility).toBe(true);
  });
});
