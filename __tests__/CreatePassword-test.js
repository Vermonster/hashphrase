import React from 'react';
import { shallow } from 'enzyme';
import { TestCreatePassword as CreatePassword } from '../src/navigation/screens/CreatePassword';

describe('<CreatePassword />', () => {
  const wrapper = shallow(
    <CreatePassword
      t={key => key}
    />,
  );

  it('should render the same snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
