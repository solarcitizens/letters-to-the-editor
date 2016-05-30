import React from 'react';
import { shallow } from 'enzyme';
import PersonalDetailsFields from '../PersonalDetailsFields';

describe('PersonalDetailsFields', () => {
  const fields = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    street: 'street',
    city: 'city',
    state: 'state',
    postCode: 'postCode',
  };

  let rendered;

  beforeEach(() => {
    rendered = shallow(<PersonalDetailsFields fieldValues={fields} onChange={() => () => {}}/>);
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
  it('renders a street field', () => {
    expect(rendered.find('#street').length).toEqual(1);
  });
  it('renders a city field', () => {
    expect(rendered.find('#city').length).toEqual(1);
  });
  it('renders a state field', () => {
    expect(rendered.find('#state').length).toEqual(1);
  });
  it('renders a postcode field', () => {
    expect(rendered.find('#postCode').length).toEqual(1);
  });
  it('renders an opt in to email communications field', () => {
    expect(rendered.find('#optedIn').length).toEqual(1);
  });
});
