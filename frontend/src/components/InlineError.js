import React from 'react';
import { FormValidationErrors as Errors } from '../config/strings.js';

const InlineError = props => (
  <span className="invalid">
    <span className="inline-errors">
      {Errors[props.errorFor] ? 'ERROR!!' : ''}
    </span>
  </span>
);

InlineError.propTypes = {
  errorFor: React.PropTypes.string,
};
export default InlineError;
