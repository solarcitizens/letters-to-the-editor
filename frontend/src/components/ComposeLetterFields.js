import React from 'react';
import Field from './Field';

const ComposeLetterFields = props =>
(
  <fieldset>
    <legend>
        Compose letter
    </legend>
    <Field id="subject" onChange={props.onChange('subject')}>Subject</Field>
    <Field id="body" type="textarea" onChange={props.onChange('body')}>Body</Field>
  </fieldset>
);

ComposeLetterFields.propTypes = {
  onChange: React.PropTypes.func.isRequired,
};

export default ComposeLetterFields;
