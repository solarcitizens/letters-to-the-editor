import React, { PropTypes } from 'react';

const Field = ({ children, id, onChange, type = 'text' }) => (
  <div className="form-group row">
    <label className="col-sm-2 form-control-label" htmlFor={id}>
          {children}
    </label>
    <div className="col-sm-4">
      <input
        className="form-control"
        id={id}
        required
        type={type}
        onChange={onChange}
      />
    </div>
  </div>
);

Field.propTypes = {
  children: PropTypes.any.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Field;
