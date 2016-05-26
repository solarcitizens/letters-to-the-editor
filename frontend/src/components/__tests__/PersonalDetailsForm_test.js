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
    postCode: 'postCode',
  };

  let rendered;

  beforeEach(() => {
    rendered = shallow(
      <PersonalDetailsForm
        formValues={fields}
        onChange={() => () => {}}
        onPostCodeChange={() => {}}
        onSubmit={() => ''}
      />);
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
});
