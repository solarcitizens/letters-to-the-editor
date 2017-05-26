import React from 'react';
import PersonalDetailsFields from './PersonalDetailsFields';
import ComposeLetterFields from './ComposeLetterFields';
import HoneypotField from './HoneypotField';
import SelectPublicationsFields from './SelectPublicationsFields';
import Errors from './Errors';
import { FormValidationErrors as ErrorStrings } from '../config/strings.js';
import letterService from '../services/letterService';
import applicationValidator from '../services/applicationValidator';

class LetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.config = props.config;
    this.initialFieldValues = { optedIn: true, isBot: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePublicationSelection = this.handlePublicationSelection.bind(this);

    this.state = {
      fieldValues: this.initialFieldValues,
      selectedPublications: [],
      errors: [],
      invalidFields: [],
      scrollToError: false,
      submitted: false,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      errors: props.errors,
    });
  }

  handleSubmit(e) {
    this.setState({ invalidFields: [], errors: [] });
    const letter = Object.assign({}, this.state.fieldValues, { publications: this.state.selectedPublications });
    const validationErrors = applicationValidator.isValid(this.state.fieldValues);

    if (letter.publications.length === 0) {
      this.setState({ errors: ['Please select at least one publication.'] });
    } else if (validationErrors.length > 0) {
      this.handleValidationErrors(validationErrors, true);
    } else {
      this.setState({ submitted: true });
      letterService.sendLetter(letter, this.config.campaign.confirmationPageUrl)
        .catch(() => {
          this.setState({ errors: ['Your letter could not be submitted.  Please try again later.'],
                          submitted: false });
        });
    }
    e.preventDefault();
  }

  handleChange(fieldName) {
    return event => {
      const newValue = event.target.type === 'checkbox'
        ? !this.state.fieldValues[fieldName]
        : event.target.value;

      this.setState(state => ({ fieldValues: Object.assign({}, state.fieldValues, { [fieldName]: newValue }) }));
    };
  }

  handlePublicationSelection(event, publicationTitle) {
    if (event.target.checked) {
      this.state.selectedPublications.push(publicationTitle);
    } else {
      const isDeselectedPublication = title => (title === publicationTitle);

      this.setState(state => ({ selectedPublications: state.selectedPublications.filter(pub => !isDeselectedPublication(pub)) }));
    }
  }

  handleValidationErrors(validationErrors, scrollToError) {
    const invalidFields = validationErrors;
    const errors = [];

    invalidFields.forEach(error => errors.push(ErrorStrings[error].message));

    this.setState({
      invalidFields,
      errors,
      scrollToError,
    });
  }

  render() {
    const almostThereMessage = 'You\'re almost there! Before you send:';

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <img alt="Step 1" className="steps" src="../images/1.svg"/>
        <PersonalDetailsFields
          invalidFields={this.state.invalidFields}
          onChange={this.handleChange}
        />
        <img alt="Step 2" className="steps" src="../images/2.svg"/>
        <SelectPublicationsFields
          postCode={this.state.fieldValues.postCode}
          onChange={this.handlePublicationSelection}
        />
        <img alt="Step 3" className="steps" src="../images/3.svg"/>
        <ComposeLetterFields
          invalidFields={this.state.invalidFields}
          onChange={this.handleChange}
        />
        <img alt="Step 4" className="steps" src="../images/4.svg"/>
        <fieldset>
          <legend>
            <h5>Proof Read and Send</h5>
          </legend>
          <aside>
            {almostThereMessage}
            <ul className="tick">
              <li>Have you proof read your letter?</li>
              <li>Are your details correct?</li>
            </ul>
          </aside>
        </fieldset>
        <HoneypotField
          onChange={this.handleChange}
        />
        <Errors
          errors={this.state.errors}
          invalidFields={this.state.invalidFields}
          scrollToError={this.state.scrollToError}
        />
        <button className="sendMyLetter" disabled={this.state.submitted} type="submit">
        {this.state.submitted ? 'Sending...' : 'Send my Letter'}</button>
      </form>
    );
  }
}

LetterForm.propTypes = {
  config: React.PropTypes.object.isRequired,
};

export default LetterForm;
