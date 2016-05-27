import React from 'react';
import { shallow } from 'enzyme';
import SelectPublicationsFields from '../SelectPublicationsFields';

describe('SelectPublicationsFields', () => {
  let rendered;

  describe('when the postcode provided is invalid', () => {
    beforeEach(() => {
      rendered = shallow(<SelectPublicationsFields postCode="" onChange={() => () => {}}/>);
    });

    it('does not render a PublicationList field', () => {
      expect(rendered.find('PublicationList').length).toEqual(0);
    });

    it('renders a message', () => {
      expect(rendered.text()).toContain('Please select a post code in order to view a list of publications.');
    });
  });

  describe('when the postcode provided is valid', () => {
    beforeEach(() => {
      rendered = shallow(<SelectPublicationsFields postCode="2000" onChange={() => () => {}}/>);
    });

    it('renders a PublicationList field', () => {
      expect(rendered.find('PublicationList').length).toEqual(1);
    });
  });
});
