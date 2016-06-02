import React from 'react';
import Field from './Field';
import _ from 'underscore';

const ComposeLetterFields = props => {
  function isValidationError(fieldId) {
    return _.indexOf(props.invalidFields, fieldId) > -1;
  }

  return (
    <fieldset>
      <legend>
        <h5>Write your letter</h5>
      </legend>
      <aside>
        Here are some helpful tips/talking points to get you started:
        <ul className="pencil">
          <li>Personal messages are the most powerful.</li>
          <li>Try to be brief, stick to your message and be cordial.</li>
        </ul>
      </aside>
      <section className="compose-letter-fields">
        <Field hasError={isValidationError('subject')} id="subject" placeholder="enter a subject for your email" onChange={props.onChange('subject')}/>
        <Field hasError={isValidationError('body')} id="body" placeholder="you can start typing your letter here" type="textarea" onChange={props.onChange('body')}/>
      </section>
    </fieldset>
  );
}


ComposeLetterFields.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  invalidFields: React.PropTypes.array,
};

export default ComposeLetterFields;
