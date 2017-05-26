import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Errors extends Component {
  constructor(props) {
    super(props);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidUpdate() {
    if (this.props.scrollToError) {
      ReactDOM.findDOMNode(this).scrollIntoView(false);
    }
  }

  render() {
    return (
      <div id="errors">
        <ul className={(this.props.errors.length > 0 || this.props.invalidFields.length > 0) ? 'errors' : ''}>
          {this.props.errors.map(error => <li key={error}>{error}</li>)}
        </ul>
      </div>
    );
  }
}

Errors.propTypes = {
  errors: PropTypes.array.isRequired,
  invalidFields: PropTypes.array.isRequired,
  scrollToError: PropTypes.bool,
};

export default Errors;
