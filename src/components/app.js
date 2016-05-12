import React from 'react';
import PersonalDetailFields from './personalDetailFields.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldValues: { },
      handleChange: this.handleChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this),
    };
  }

  handleSubmit() {
    // send stuff to server
  }

  handleChange(fieldName) {
    const detailsComponent = this;

    return event => {
      const newFieldValues = Object.assign({}, detailsComponent.state.fieldValues, { [fieldName]: event.target.value });

      detailsComponent.setState({ fieldValues: newFieldValues });
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

App.propTypes = {
  formValues: React.PropTypes.object,
};

export default App;
