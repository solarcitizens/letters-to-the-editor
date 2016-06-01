import React, { PropTypes } from 'react';

const Field = ({ children, id, onChange, required, placeholder, type = 'text' }) => {
  let input = React.createElement(type === 'textarea' ? 'textarea' : 'input', {
    className: 'form-control',
    id,
    placeholder,
    onChange,
    required: { required },
    type,
  });

  return (
    <div className={'form-group row field-entry ' + id}>
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
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};

export default Field;
