import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';
import PersonalDetailsForm from '../PersonalDetailsForm';

describe('App', () => {
  it('includes PersonalDetailsForm', () => {
    const app = shallow(<App/>);

    expect(app.find(PersonalDetailsForm).length).toEqual(1);
  });
});
