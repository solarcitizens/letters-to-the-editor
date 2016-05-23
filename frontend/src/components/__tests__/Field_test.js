import React from 'react';
import { shallow } from 'enzyme';
import Field from '../Field';

describe('Field', () => {
  it('renders a label with the provided child text', () => {
    const field = shallow(<Field id="" onChange={() => {}}>some label</Field>);

    expect(field.find('label').length).toEqual(1);
    expect(field.find('label').text()).toEqual('some label');
  });

  it('renders an input when there is no type', () => {
    const field = shallow(<Field id="" onChange={() => {}}>some label</Field>);

    expect(field.find('input').length).toEqual(1);
  });

  it('renders a textarea when the type is textarea', () => {
    const field = shallow(<Field id="" type="textarea" onChange={() => {}}>some label</Field>);

    expect(field.find('textarea').length).toEqual(1);
  });
});
