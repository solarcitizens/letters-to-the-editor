import React from 'react';

const PersonalDetailFields = props =>
 (
  <form className="form-horizontal" onSubmit={props.onSubmit}>
    <div className="form-group row">
      <label className="col-sm-2 form-control-label" htmlFor="firstName">First Name</label>
      <div className="col-sm-4">
        <input
          className="form-control"
          defaultValue={props.formValues.firstName}
          id="firstName"
          required type="text"
          onBlur={props.onChange('firstName')}
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-2 form-control-label" htmlFor="lastName">Last Name</label>
      <div className="col-sm-4">
        <input
          className="form-control"
          id="lastName"
          required type="text"
          defaultValue={props.formValues.lastName}
          onBlur={props.onChange('lastName')}
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-2 form-control-label" htmlFor="email">Email</label>
      <div className="col-sm-4">
        <input
          className="form-control"
          id="email"
          required type="email"
          defaultValue={props.formValues.email}
          onBlur={props.onChange('email')}
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-2 form-control-label" htmlFor="phone">Phone</label>
      <div className="col-sm-4">
        <input
          className="form-control"
          id="phone"
          required type="phone"
          defaultValue={props.formValues.phone}
          onBlur={props.onChange('phone')}
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-2 form-control-label" htmlFor="address">Address</label>
      <div className="col-sm-4">
        <input
          className="form-control"
          id="address"
          required type="address"
          defaultValue={props.formValues.address}
          onBlur={props.onChange('address')}
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-2 form-control-label" htmlFor="postcode">Post code</label>
      <div className="col-sm-2">
        <input
          className="form-control"
          id="postcode"
          required type="postcode"
          defaultValue={props.formValues.postcode}
          onBlur={props.onChange('postcode')}
        />
      </div>
    </div>
    <input className="btn btn-primary" type="submit" value="Submit"/>
  </form>
);

PersonalDetailFields.propTypes = {
  formValues: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
};

export default PersonalDetailFields;
