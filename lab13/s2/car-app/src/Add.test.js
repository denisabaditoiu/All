import React from 'react';
import { shallow, mount } from 'enzyme';
import AddComponent from './Add';

describe('Add Component Rendering', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<AddComponent debug />);
  
    expect(component).toMatchSnapshot();

  });
});