import React from 'react';
import _ from 'underscore';

const PersonalDetailFields = props => {
  function isValidationError(fieldName) {
    return _.indexOf(props.invalidFields, fieldName) > -1;
  }


  PersonalDetailFields.propTypes = {
    onChange: React.PropTypes.func,
    formValues: React.PropTypes.object,
  }

  // handleChange(key) {
  //   return function update(e) {
  //     const state = {};
  //
  //     state[key] = e.target.value;
  //     this.setState(state);
  //   }.bind(this);
  // }

  handleSubmit(e) {
    e.preventDefault();
    // handle data
    // send to server
    console.log(this.state);
  }

  return (
    <PersonalDetailFields>
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-2 form-control-label" htmlFor="firstName">First Name</label>
          <div className="col-sm-4">
            <input
              className="form-control"
              id="firstName"
              required type="text"
              defaultValue={props.formValues.firstName}
              onChange={props.onChange('firstName')}
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
              value={props.formValues.lastName}
              onChange={props.onChange('lastName')}
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
              value={props.formValues.email}
              onChange={props.onChange('email')}
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
              value={props.formValues.phone}
              onChange={props.onChange('phone')}
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
              value={props.formValues.address}
              onChange={props.onChange('address')}
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
              value={props.formValues.postcode}
              onChange={props.onChange('postcode')}
            />
          </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit"/>
      </form>
    </PersonalDetailFields>
  );
};
