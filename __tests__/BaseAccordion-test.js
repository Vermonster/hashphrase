import React from 'react';
import { shallow } from 'enzyme';
import BaseAccordion from '../src/components/BaseAccordion';

describe('<TipsPage />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <BaseAccordion title="test title" contents="test contents" />,
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
