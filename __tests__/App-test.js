/* @jest-environment jsdom */

import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

jest.mock('react-navigation', () => ({
  createAppContainer: jest.fn().mockReturnValue(
    // eslint-disable-next-line
    function NavigationContainer(props) { return null; }
  ),
  createStackNavigator: jest.fn(),
}));

describe('<App />', () => {
  it('should render the same snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
