import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';
import PersonalDetailFields from '../personalDetailFields';

describe('App', () => {
  it('includes PersonalDetailFields', () => {
    const app = shallow(<App/>);

    expect(app.find(PersonalDetailFields).length).toEqual(1);
  });

  xit('updates state when onBlur event occurs', () => {
    const app = shallow(<App/>);

    app.find('firstName').simulate('onBlur', { target: { value: 'banana' }});
    expect(app.state('firstName')).to.equal('banana');
  });
});
