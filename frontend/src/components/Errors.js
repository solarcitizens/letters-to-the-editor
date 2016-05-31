import React from 'react';

const Errors = props => (
  <div id="errors">
    <ul className={props.errors.length > 0 ? 'errors' : ''}>
      {props.errors.map(error => <li key={error}>{error}</li>)}
    </ul>
  </div>
);


Errors.propTypes = {
  errors: React.PropTypes.array.isRequired,
};

export default Errors;
