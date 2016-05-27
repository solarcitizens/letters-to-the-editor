import React from 'react';
import { shallow } from 'enzyme';
import LetterForm from '../LetterForm';

describe('LetterForm', () => {
  let rendered;

  beforeEach(() => {
    rendered = shallow(<LetterForm/>);
  });

  it('renders a ComposeLetterFields component', () => {
    expect(rendered.find('ComposeLetterFields').length).toEqual(1);
  });
  it('renders a PersonalDetailsFields component', () => {
    expect(rendered.find('PersonalDetailsFields').length).toEqual(1);
  });
});
