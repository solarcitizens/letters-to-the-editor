import React from 'react';
import { shallow } from 'enzyme';
import _ from 'underscore';
import PublicationList from '../PublicationList';

describe('PublicationList', () => {
  const publications = ['The Indi Chronicles', 'The Wangaratta Warbler', 'The Sydney Snitch'];

  let rendered;

  beforeEach(() => {
    rendered = shallow(<PublicationList publications={publications} onChange={() => {}}/>);
  });

  it('renders a checkbox input for each publication', () => {
    expect(rendered.find('input[type="checkbox"]').length).toEqual(publications.length);
  });

  it('renders a label for each publication', () => {
    const labels = rendered.find('label.checkbox');

    expect(labels.length).toEqual(publications.length);
    labels.map(label => (expect(_.contains(publications, label.text())).toEqual(true)));
  });
});
