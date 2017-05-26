import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';
import LetterForm from '../LetterForm';

xdescribe('App', () => {
  it('includes LetterForm', () => {
    const routeParams = { campaignName: 'campaign' };
    const app = shallow(<App routeParams={routeParams}/>);

    expect(app.find(LetterForm).length).toEqual(1);
  });
});
