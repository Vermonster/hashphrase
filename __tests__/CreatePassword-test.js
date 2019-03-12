import React from 'react';
import { shallow } from 'enzyme';
import CreatePassword from '../src/navigation/screens/CreatePassword';

describe('<CreatePassword />', () => {
  const navigation = { getParam: jest.fn() };
  const wrapper = shallow(<CreatePassword navigation={navigation} />);

  it('should render the same snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
