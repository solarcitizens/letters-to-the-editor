import React from 'react';
import Field from './Field';

const PersonalDetailsFields = props =>
 (
  <fieldset>
    <legend>
        Enter your details
    </legend>
    <Field id="firstName" onChange={props.onChange('firstName')}>First Name</Field>
    <Field id="lastName" onChange={props.onChange('lastName')}>Last Name</Field>
    <Field id="email" type="email" onChange={props.onChange('email')}>Email</Field>
    <Field id="phone" type="tel" onChange={props.onChange('phone')}>Phone</Field>
    <Field id="street" onChange={props.onChange('street')}>Street</Field>
    <Field id="city" onChange={props.onChange('city')}>City</Field>
    <Field id="state" onChange={props.onChange('state')}>State</Field>
    <Field id="postCode" onChange={props.onPostCodeChange}>Post code</Field>
  </fieldset>
);

PersonalDetailsFields.propTypes = {
  formValues: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onPostCodeChange: React.PropTypes.func.isRequired,
};

export default PersonalDetailsFields;
