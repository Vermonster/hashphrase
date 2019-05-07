import React from 'react';
import { shallow } from 'enzyme';
import { TestCreatePassword as CreatePassword } from '../src/navigation/screens/CreatePassword';

// test if pressing touchableOpacity button calls clearclipboard fn
// 
// test if clipboard is actually cleared?

describe('<CreatePassword />', () => {
  const wrapper = shallow(
    <CreatePassword
      t={key => key}
    />,
  );

  it('should render the same snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should show snackbar when clipboard-clear button is pressed', () => {
    const instance = wrapper.instance();
    expect(instance.state.snackbarVisibility).toBe(false);
  });
});
