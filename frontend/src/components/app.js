import React from 'react';
import publicationService from '../services/publicationService';
import letterService from '../services/letterService';
import PersonalDetailsForm from './PersonalDetailsForm';
import PublicationList from './PublicationList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlePersonalDetailChange = this.handlePersonalDetailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePostCode = this.handlePostCode.bind(this);
    this.fetchPublications = this.fetchPublications.bind(this);
    this.handlePublicationSelection = this.handlePublicationSelection.bind(this);
    this.state = {
      fieldValues: { },
      selectedPublications: [],
    };
  }

  handleSubmit(e) {
    const letter = { personalDetails: this.state.fieldValues, publications: this.state.selectedPublications };

    letterService.sendLetter(letter)
      .then(() => {
        this.setState({ fieldValues: {} });
      });
    e.preventDefault();
  }

  handlePersonalDetailChange(fieldName) {
    return event => {
      const value = event.target.value;
      const newFieldValues = Object.assign({}, this.state.fieldValues, { [fieldName]: value });

      this.setState({ fieldValues: newFieldValues });
    };
  }

  fetchPublications(event) {
    const value = event.target.value;

    publicationService.fetchPublicationsFor(value)
      .then(publications => {
        this.setState({ publicationList: publications });
      });
  }

  handlePostCode(event) {
    this.handlePersonalDetailChange('postCode')(event);
    if (event.target.value.length >= 4) {
      this.fetchPublications(event);
    }
  }

  handlePublicationSelection(event) {
    const publicationTitle = event.target.labels[0].innerText;

    if (event.target.checked) {
      this.state.selectedPublications.push(publicationTitle);
    } else {
      const isNotUncheckedPublication = title => (title !== publicationTitle);

      this.setState(state => ({ selectedPublications: state.selectedPublications.filter(isNotUncheckedPublication) }));
    }
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
              onChange={this.handlePersonalDetailChange}
              onPostCodeChange={this.handlePostCode}
              onSubmit={this.handleSubmit}
            />
          </div>
        </div>
        <div className="row">
          <h2 className="display-1">Select Your Publications</h2>
          {this.state.publicationList
            ? <PublicationList publications={this.state.publicationList} onChange={this.handlePublicationSelection}/>
            : noPostCodeMessage}
        </div>
      </div>
    );
  }

}

export default App;
