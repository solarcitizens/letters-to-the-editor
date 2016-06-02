import React, { PropTypes } from 'react';
import InlineError from './InlineError';

const Field = ({ children, hasError, id, onChange, required, placeholder, type = 'text' }) => {
  let input = React.createElement(type === 'textarea' ? 'textarea' : 'input', {
    className: hasError ? 'invalid' : '',
    id,
    placeholder,
    onChange,
    required: false,
    noValidate: true,
    type,
  });

  const optional = required ? <span className="optional"> (optional)</span> : <span className="mandatory"/>;

  return (
    <div className={'form-group row field-entry ' + id}>
      {children && (
        <label htmlFor={id}>
          {children}
        </label>
      )}
      {input}
      {optional}
    </div>
  );
};

Field.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.any,
  hasError: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};

export default Field;
