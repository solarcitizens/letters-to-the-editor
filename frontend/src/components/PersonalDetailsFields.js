import React from 'react';
import Field from './Field';

const PersonalDetailsFields = props =>
 (
  <fieldset>
    <legend>
      <h5>Enter your details</h5>
    </legend>
    <section class="fields">
      <Field id="firstName" onChange={props.onChange('firstName')}>First Name</Field>
      <Field id="lastName" onChange={props.onChange('lastName')}>Last Name</Field>
      <Field id="email" type="email" onChange={props.onChange('email')}>Email</Field>
      <Field id="phone" type="tel" onChange={props.onChange('phone')}>Phone</Field>
      <Field id="street" onChange={props.onChange('street')}>Street</Field>
      <Field id="city" onChange={props.onChange('city')}>City</Field>
      <Field id="state" onChange={props.onChange('state')}>State</Field>
      <Field id="postCode" onChange={props.onChange('postCode')}>Post code</Field>
    </section>
    </fieldset>
);

PersonalDetailsFields.propTypes = {
  onChange: React.PropTypes.func.isRequired,
};

export default PersonalDetailsFields;
