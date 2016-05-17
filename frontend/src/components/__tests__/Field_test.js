import React from 'react';
import { shallow } from 'enzyme';
import Field from '../Field';

describe('Field', () => {
  it('renders a label with the provided child text', () => {
    const field = shallow(<Field id="" onChange={() => {}}>some label</Field>);

    expect(field.find('label').length).toEqual(1);
    expect(field.find('label').text()).toEqual('some label');
  });

  it('renders an input', () => {
    const field = shallow(<Field id="" onChange={() => {}}>some label</Field>);

    expect(field.find('input').length).toEqual(1);
  });
});
