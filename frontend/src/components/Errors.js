import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Errors extends Component {
  constructor(props) {
    super(props);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidUpdate() {
    if (this.props.scrollToError) {
      ReactDOM.findDOMNode(this).scrollIntoView(false);
    }
  }

  render(props) {
    return (
      <div id="errors">
        <ul className={(this.props.errors.length > 0 || this.props.invalidFields.length > 0) ? 'errors' : ''}>
          {this.props.errors.map(error => <li key={error}>{error}</li>)}
        </ul>
      </div>
    );
  }
}
