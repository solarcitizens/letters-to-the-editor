import React from 'react';
import shallowRender from '../../shallowRender';
import { App } from '../app';

describe('App', () => {
  it('does stuff', () => {
    const form = shallowRender(<App/>);

    expect(app.props.children[0].type).toEqual('h1');
    expect(app.props.children[1].props.children).toEqual('It works!');
  });
});
