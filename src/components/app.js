import React from 'react';
import PersonalDetailFields from './personalDetailFields.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldValues: props.formValues,
    };
  }

  onChange(fieldName) {
    const detailsComponent = this;

    return event => {
      const newFieldValues = Object.assign({}, detailsComponent.state.fieldValues, { [fieldName]: event.target.value });
      detailsComponent.setState({ fieldValues: newFieldValues });
    };
  }

  submitDetails() {
    //submitting happens
  }

  render() {
    return (
      <div className="lettersToTheEditor container">
        <div className="row">
          <h1 className="display-1">Letters to the Editor</h1>
          <div className="form-body">
            <PersonalDetailFields
              onChange={this.onChange.bind(this)}
              formValues={this.props.formValues}
            />
            <button onClick={this.submitDetails.bind(this)}>Register</button>
          </div>
        </div>
      </div>
    );
  }
}
