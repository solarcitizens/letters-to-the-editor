import React from 'react';
import { shallow } from 'enzyme';
import PersonalDetailsForm from '../PersonalDetailsForm';

describe('PersonalDetailsForm', () => {
  const fields = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    address: 'address',
    postcode: 'postcode',
  };

  let rendered;

  beforeEach(() => {
    rendered = shallow(<PersonalDetailsForm formValues={fields} onChange={() => () => {}} onSubmit={() => ''}/>);
  });

  it('renders a firstName field', () => {
    expect(rendered.find('#firstName').length).toEqual(1);
  });
  it('renders a lastName field', () => {
    expect(rendered.find('#lastName').length).toEqual(1);
  });
  it('renders a email field', () => {
    expect(rendered.find('#email').length).toEqual(1);
  });
  it('renders a phone field', () => {
    expect(rendered.find('#phone').length).toEqual(1);
  });
  it('renders a address field', () => {
    expect(rendered.find('#address').length).toEqual(1);
  });
  it('renders a postcode field', () => {
    expect(rendered.find('#postcode').length).toEqual(1);
  });
});
