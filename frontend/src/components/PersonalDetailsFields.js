import React from 'react';
import Field from './Field';
import _ from 'underscore';

const PersonalDetailsFields = props => {
  const isValidationError = fieldId => (_.indexOf(props.invalidFields, fieldId) > -1);

  return (
    <fieldset>
      <legend>
        <h5>Enter your details</h5>
      </legend>
      <section className="fields">
        <Field false hasError={isValidationError('firstName')} id="firstName" onChange={props.onChange('firstName')}>First Name</Field>
        <Field false hasError={isValidationError('lastName')} id="lastName" onChange={props.onChange('lastName')}>Last Name</Field>
        <Field false hasError={isValidationError('street')} id="street" onChange={props.onChange('street')}>Street</Field>
        <div className="address">
          <Field false hasError={isValidationError('city')} id="city" onChange={props.onChange('city')}>City</Field>
          <Field false hasError={isValidationError('state')} id="state" onChange={props.onChange('state')}>State</Field>
          <Field false hasError={isValidationError('postCode')} id="postCode" onChange={props.onChange('postCode')}>Post code</Field>
        </div>
        <Field false hasError={isValidationError('phone')} id="phone" type="tel" onChange={props.onChange('phone')}>Phone</Field>
        <Field false hasError={isValidationError('email')} id="email" type="email" onChange={props.onChange('email')}>Email</Field>
        <div className="explanation">We need to send this information with your letter so that editors can contact you.  Please fill in all details.</div>
      </section>
      <label className="checkbox" htmlFor="optedIn">
        <input defaultChecked="true" id="optedIn" type="checkbox" onChange={props.onChange('optedIn')}/>
        I want to receive updates and news from Solar Citizens.
      </label>
    </fieldset>
  );
};

PersonalDetailsFields.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  invalidFields: React.PropTypes.array,
};

export default PersonalDetailsFields;
