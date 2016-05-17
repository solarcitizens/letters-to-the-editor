import React from 'react';
import Field from './Field';

const PersonalDetailsForm = props =>
 (
  <form className="form-horizontal" onSubmit={props.onSubmit}>
    <Field content={props.formValues.firstName} id="firstName" onChange={props.onChange('firstName')}>First Name</Field>
    <Field content={props.formValues.lastName} id="lastName" onChange={props.onChange('lastName')}>Last Name</Field>
    <Field content={props.formValues.email} id="email" type="email" onChange={props.onChange('email')}>Email</Field>
    <Field content={props.formValues.phone} id="phone" type="tel" onChange={props.onChange('phone')}>Phone</Field>
    <Field content={props.formValues.address} id="address" onChange={props.onChange('address')}>Address</Field>
    <Field content={props.formValues.postcode} id="postcode" onChange={props.onChange('postcode')}>Post code</Field>
    <input className="btn btn-primary" content="Submit" type="submit" onSubmit={() => props.onSubmit}/>
  </form>
);

PersonalDetailsForm.propTypes = {
  formValues: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
};

export default PersonalDetailsForm;
