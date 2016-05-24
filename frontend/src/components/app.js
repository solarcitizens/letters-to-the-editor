import React from 'react';
import $ from 'jquery';
import publicationService from '../services/publicationService';
import PersonalDetailsForm from './PersonalDetailsForm';
import PublicationList from './PublicationList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      fieldValues: { },
    };
  }

  handleSubmit(e) {
    $.ajax({
      type: 'POST',
      url: '/letters',
      data: this.state.fieldValues,
      success: () => {
        console.log('Submitted!');
      },
      error: res => {
        console.log('Ajax failed :(');
        console.log(res);
      },
    });
    e.preventDefault();
    this.setState({ fieldValues: {} });
  }

  handleChange(fieldName) {
    return event => {
      const value = event.target.value;
      const newFieldValues = Object.assign({}, this.state.fieldValues, { [fieldName]: value });

      this.setState({ fieldValues: newFieldValues });
      if (fieldName === 'postCode') {
        console.log(value);
        publicationService.fetchPublicationsFor(value)
          .then(publications => {
            this.setState({ publicationList: publications });
          });
      }
    };
  }

  render() {
    const noPostCodeMessage = <div>Please select a post code in order to view a list of publications.</div>;

    return (
      <div className="lettersToTheEditor container">
        <h1 className="display-1">Letters to the Editor</h1>
        <div className="row">
          <h2 className="display-1">Enter Your Details</h2>
          <div className="form-body">
            <PersonalDetailsForm
              formValues={this.state.fieldValues}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </div>
        </div>
        <div className="row">
          <h2 className="display-1">Select Your Publications</h2>
          {this.state.publicationList
            ? <PublicationList publications={this.state.publicationList}/>
            : noPostCodeMessage}
        </div>
      </div>
    );
  }

}

export default App;
