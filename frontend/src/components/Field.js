import React, { PropTypes } from 'react';

const Field = ({ children, id, onChange, optional, placeholder, type = 'text' }) => {
  let input = React.createElement(type === 'textarea' ? 'textarea' : 'input', {
    className: 'form-control',
    id,
    placeholder,
    onChange,
    optional,
    type,
  });

  return (
    <div className={"form-group row field-entry " + id}>
      {children && (
        <label className="col-sm-2 form-control-label" htmlFor={id}>
          {children}
        </label>
      )}
      {input}
    </div>
  );
};

Field.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.any,
  optional: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Field;
