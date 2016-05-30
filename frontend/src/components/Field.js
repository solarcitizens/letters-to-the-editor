import React, { PropTypes } from 'react';

const Field = ({ children, id, onChange, optional, type = 'text' }) => {
  let input;

  switch (type) {
  case 'textarea' :
    input = (
      <textarea className="form-control" id={id} required={!optional} type={type} onChange={onChange}/>
      );
    break;
  default:
    input = (
      <input className="form-control" id={id} required={!optional} type={type} onChange={onChange}/>
      );
    break;
  }

  return (
    <div className="form-group row">
      <label className="col-sm-2 form-control-label" htmlFor={id}>
          {children}
      </label>
      <div className="col-sm-4">
      {input}
      </div>
    </div>
  );
};

Field.propTypes = {
  children: PropTypes.any.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  optional: PropTypes.bool,
  type: PropTypes.string,
};

export default Field;
