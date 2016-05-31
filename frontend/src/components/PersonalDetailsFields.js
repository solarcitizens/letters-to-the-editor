import React from 'react';
import Field from './Field';

const PersonalDetailsFields = props =>
 (
  <fieldset>
    <legend>
      <h5>Enter your details</h5>
    </legend>
    <section className="fields">
      <Field id="firstName" onChange={props.onChange('firstName')}>First Name</Field>
      <Field id="lastName" onChange={props.onChange('lastName')}>Last Name</Field>
      <Field id="street" onChange={props.onChange('street')}>Street</Field>
      <div className="address">
        <Field id="city" onChange={props.onChange('city')}>City</Field>
        <Field id="state" onChange={props.onChange('state')}>State</Field>
        <Field id="postCode" onChange={props.onChange('postCode')}>Post code</Field>
      </div>
      <Field id="phone" type="tel" onChange={props.onChange('phone')}>Phone</Field>
      <Field id="email" type="email" onChange={props.onChange('email')}>Email</Field>
    </section>
    <input defaultChecked="true" id="optedIn" type="checkbox" onChange={props.onChange('optedIn')}/>
    <label className="checkbox" htmlFor="optedIn">I want to receive updates and news from Solar Citizens.</label>
  </fieldset>
);

PersonalDetailsFields.propTypes = {
  onChange: React.PropTypes.func.isRequired,
};

export default PersonalDetailsFields;
