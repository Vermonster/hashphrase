import React from 'react';
import { shallow } from 'enzyme';
import { TestTipsPage as TipsPage } from '../src/navigation/screens/TipsPage';

describe('<TipsPage />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <TipsPage
        t={key => key}
      />,
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
