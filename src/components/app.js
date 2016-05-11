import React from 'react';

let App = React.createClass({
  render() {
    return (
      <div className="lettersToTheEditor container">
        <div className="row">
          <h1 className="display-1">Letters to the Editor</h1>
          <PersonalDetails/>
        </div>
      </div>
    );
  }
});

let PersonalDetails = React.createClass({
  getInitialState() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      postcode: ''
    };
  },

  handleChange(key) {
    return function(e) {
      const state = {};

      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  },

  handleSubmit(e) {
    e.preventDefault();
    // handle data
    // send to server
    console.log(this.state);
  },

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-2 form-control-label" htmlFor="firstName">First Name</label>
          <div className="col-sm-4">
            <input
              className="form-control"
              id="firstName"
              required type="text"
              value={this.state.firstName}
              onChange={this.handleChange('firstName')}
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
              value={this.state.lastName}
              onChange={this.handleChange('lastName')}
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
              value={this.state.email}
              onChange={this.handleChange('email')}
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
              value={this.state.phone}
              onChange={this.handleChange('phone')}
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
              value={this.state.address}
              onChange={this.handleChange('address')}
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
              value={this.state.postcode}
              onChange={this.handleChange('postcode')}
            />
          </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit"/>
      </form>
    );
  }
});
