import React from 'react';
import { shallow } from 'enzyme';
import {ListComponent} from './List';

describe('ListComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ListComponent debug />);
  
    expect(component).toMatchSnapshot();
  });
});