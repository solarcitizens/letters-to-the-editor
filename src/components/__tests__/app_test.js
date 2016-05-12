import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';
import PersonalDetailFields from '../personalDetailFields';

describe('App', () => {
  it('includes PersonalDetailFields', () => {
    const app = shallow(<App/>);

    expect(app.find(PersonalDetailFields).length).toEqual(1);
  });
});
