import React from 'react';
import Field from './Field';

const ComposeLetterFields = props =>
(
  <fieldset>
    <legend>
        Compose letter
    </legend>
    <Field content={props.formValues.subject} id="subject" onChange={props.onChange('subject')}>Subject</Field>
    <Field content={props.formValues.body} id="body" type="textarea" onChange={props.onChange('body')}>Body</Field>
  </fieldset>
);

ComposeLetterFields.propTypes = {
  formValues: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default ComposeLetterFields;
