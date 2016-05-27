import React from 'react';
import PersonalDetailsFields from './PersonalDetailsFields';
import ComposeLetterFields from './ComposeLetterFields';
import publicationService from '../services/publicationService';
import letterService from '../services/letterService';
import PublicationList from './PublicationList';

class LetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(fieldName) {
    return event => {
      const newFieldValues = Object.assign({}, this.state.fieldValues, { [fieldName]: event.target.value });

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


  handlePublicationSelection(event) {
    const publicationTitle = event.target.labels[0].innerText;

    if (event.target.checked) {
      this.state.selectedPublications.push(publicationTitle);
    } else {
      const isNotUncheckedPublication = title => (title !== publicationTitle);

      this.setState(state => ({ selectedPublications: state.selectedPublications.filter(isNotUncheckedPublication) }));
    }
  }

  handlePostCode(event) {
    this.handleChange('postCode')(event);
    if (event.target.value.length >= 4) {
      this.fetchPublications(event);
    }
  }

  render() {
    const noPostCodeMessage = <div>Please select a post code in order to view a list of publications.</div>;

    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <PersonalDetailsFields
          fieldValues={this.state.fieldValues}
          onChange={this.handleChange}
          onPostCodeChange={this.handlePostCode}
        />
        <h2 className="display-1">Select Your Publications</h2>
        {this.state.publicationList
          ? <PublicationList publications={this.state.publicationList} onChange={this.handlePublicationSelection}/>
          : noPostCodeMessage}
        <ComposeLetterFields
          fieldValues={this.state.fieldValues}
          onChange={this.handleChange}
        />
        <button className="btn btn-primary" type="submit">Go</button>
      </form>
    );
  }
}
export default LetterForm;
