import React from 'react';
import PersonalDetailsFields from './PersonalDetailsFields';
import ComposeLetterFields from './ComposeLetterFields';
import SelectPublicationsFields from './SelectPublicationsFields';
import letterService from '../services/letterService';

class LetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.initialFieldValues = { optedIn: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePublicationSelection = this.handlePublicationSelection.bind(this);
    this.state = {
      fieldValues: this.initialFieldValues,
      selectedPublications: [],
    };
  }

  handleSubmit(e) {
    const letter = { personalDetails: this.state.fieldValues, publications: this.state.selectedPublications };

    letterService.sendLetter(letter)
      .then(() => {
        this.setState({ fieldValues: this.initialFieldValues });
      });
    e.preventDefault();
  }

  handleChange(fieldName) {
    return event => {
      const newValue = event.target.type === 'checkbox'
        ? !this.state.fieldValues[fieldName]
        : event.target.value;

      this.setState(state => { state.fieldValues[fieldName] = newValue; });
    };
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
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <img className="steps" src="../images/1.svg"/>
        <PersonalDetailsFields
          onChange={this.handleChange}
        />
        <img className="steps" src="../images/2.svg"/>
        <SelectPublicationsFields
          postCode={this.state.fieldValues.postCode}
          onChange={this.handlePublicationSelection}
        />
        <img className="steps" src="../images/3.svg"/>
        <ComposeLetterFields
          onChange={this.handleChange}
        />
        <button className="btn btn-primary" type="submit">Go</button>
      </form>
    );
  }
}
export default LetterForm;
