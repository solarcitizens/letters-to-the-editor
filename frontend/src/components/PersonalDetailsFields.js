import React from 'react';
import Field from './Field';

const PersonalDetailsFields = props =>
 (
  <fieldset>
    <legend>
      <h5>Enter your details</h5>
    </legend>
    <section className="fields">
      <Field id="firstName" true onChange={props.onChange('firstName')}>First Name</Field>
      <Field id="lastName" true onChange={props.onChange('lastName')}>Last Name</Field>
      <Field id="street" true onChange={props.onChange('street')}>Street</Field>
      <div className="address">
        <Field id="city" true onChange={props.onChange('city')}>City</Field>
        <Field id="state" true onChange={props.onChange('state')}>State</Field>
        <Field id="postCode" true onChange={props.onChange('postCode')}>Post code</Field>
      </div>
      <Field id="phone" true type="tel" onChange={props.onChange('phone')}>Phone</Field>
      <Field id="email" true type="email" onChange={props.onChange('email')}>Email</Field>
    </section>
    <label className="checkbox" htmlFor="optedIn">
      <input defaultChecked="true" id="optedIn" type="checkbox" onChange={props.onChange('optedIn')}/>
      I want to receive updates and news from Solar Citizens.
    </label>
  </fieldset>
);

PersonalDetailsFields.propTypes = {
  onChange: React.PropTypes.func.isRequired,
};

export default PersonalDetailsFields;
