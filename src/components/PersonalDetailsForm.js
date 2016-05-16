import React from 'react';
import Field from './Field';

const PersonalDetailsForm = props =>
 (
  <form className="form-horizontal" onSubmit={props.onSubmit}>
    <Field id="firstName" value={props.formValues.firstName} onChange={props.onChange('firstName')}>First Name</Field>
    <Field id="lastName" value={props.formValues.lastName} onChange={props.onChange('lastName')}>Last Name</Field>
    <Field id="email" type="email" value={props.formValues.email} onChange={props.onChange('email')}>Email</Field>
    <Field id="phone" type="tel" value={props.formValues.phone} onChange={props.onChange('phone')}>Phone</Field>
    <Field id="address" value={props.formValues.address} onChange={props.onChange('address')}>Address</Field>
    <Field id="postcode" value={props.formValues.postcode} onChange={props.onChange('postcode')}>Post code</Field>
    <input className="btn btn-primary" type="submit" value="Submit" onSubmit={() => props.onSubmit}/>
  </form>
);

PersonalDetailsForm.propTypes = {
  formValues: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
};

export default PersonalDetailsForm;
