import React from 'react';
import PersonalDetailsFields from './PersonalDetailsFields';
import ComposeLetterFields from './ComposeLetterFields';
import SelectPublicationsFields from './SelectPublicationsFields';
import Errors from './Errors';
import letterService from '../services/letterService';
import configService from '../services/configService';

class LetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.initialFieldValues = { optedIn: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePublicationSelection = this.handlePublicationSelection.bind(this);
    this.handleFailedCaptcha = this.handleFailedCaptcha.bind(this);
    configService.getConfig().then(config => (this.config = config));
    this.state = {
      fieldValues: this.initialFieldValues,
      selectedPublications: [],
      errors: [],
      failedCaptcha: false,
    };
  }

  handleSubmit(e) {
    const letter = Object.assign({}, this.state.fieldValues, { publications: this.state.selectedPublications });

    letterService.sendLetter(letter, this.config.confirmationPageUrl)
      .catch(() => {
        this.setState({ errors: ['Your letter could not be submitted.  Please try again later.'] });
      });
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

  handlePublicationSelection(event) {
    const publicationTitle = event.target.labels[0].innerText;

    if (event.target.checked) {
      this.state.selectedPublications.push(publicationTitle);
    } else {
      const isNotUncheckedPublication = title => (title !== publicationTitle);

      this.setState(state => ({ selectedPublications: state.selectedPublications.filter(isNotUncheckedPublication) }));
    }
  }

  handleFailedCaptcha() {
    this.setState({ failedCaptcha: true });
  }

  render() {
    const almostThereMessage = 'You\'re almost there! Before you send:';

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <img alt="Step 1" className="steps" src="../images/1.svg"/>
        <PersonalDetailsFields
          onChange={this.handleChange}
        />
        <img alt="Step 2" className="steps" src="../images/2.svg"/>
        <SelectPublicationsFields
          postCode={this.state.fieldValues.postCode}
          onChange={this.handlePublicationSelection}
        />
        <img alt="Step 3" className="steps" src="../images/3.svg"/>
        <ComposeLetterFields
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
        <Errors
          errors={this.state.errors}
        />
        <button className="btn btn-primary" type="submit">Send my Letter</button>
        <div className="no-bots-allowed">
          <label><input type="checkbox" onChange={this.handleFailedCaptcha}/>I am totes a bot.</label>
        </div>
      </form>
    );
  }
}
export default LetterForm;
