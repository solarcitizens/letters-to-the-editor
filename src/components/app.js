import React from 'react';
import PersonalDetailFields from './personalDetailFields.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      fieldValues: { },
    };
  }

  handleSubmit() {
    console.log("Submitted!");
  }

  handleChange(fieldName) {
    return event => {
      const newFieldValues = Object.assign({}, this.state.fieldValues, { [fieldName]: event.target.value });
      this.setState({ fieldValues: newFieldValues });
    };
  }

  render() {
    return (
      <div className="lettersToTheEditor container">
        <div className="row">
          <h1 className="display-1">Letters to the Editor</h1>
          <div className="form-body">
            <PersonalDetailFields
              formValues={this.state.fieldValues}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
