import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';
import LetterForm from '../LetterForm';

describe('App', () => {
  it('includes LetterForm', () => {
    const app = shallow(<App/>);

    expect(app.find(LetterForm).length).toEqual(1);
  });
});
