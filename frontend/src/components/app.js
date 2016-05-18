import React from 'react';
import $ from 'jquery';
import PersonalDetailsForm from './PersonalDetailsForm';

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
    $.ajax({
      type: 'POST',
      url: '/',
      data: this.state.fieldValues,
      success: () => {
        console.log('Submitted!');
      },
      error: () => {
        console.log('Failed :(');
      },
    });
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
            <PersonalDetailsForm
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
