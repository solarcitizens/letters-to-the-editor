import React from 'react';
import { shallow } from 'enzyme';
import ComposeLetterFields from '../ComposeLetterFields';

describe('ComposeLetterFields', () => {
  const fields = {
    subject: 'subject',
    body: 'body',
  };

  let rendered;

  beforeEach(() => {
    rendered = shallow(<ComposeLetterFields formValues={fields} onChange={() => () => {}}/>);
  });

  it('renders a subject field', () => {
    expect(rendered.find('#subject').length).toEqual(1);
  });
  it('renders a body field', () => {
    expect(rendered.find('#body').length).toEqual(1);
  });
});
