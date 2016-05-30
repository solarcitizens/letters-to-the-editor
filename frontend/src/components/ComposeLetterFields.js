import React from 'react';
import Field from './Field';

const ComposeLetterFields = props =>
(
  <fieldset>
    <legend>
      <h5>Write your letter</h5>
    </legend>
    <aside>
      Here are some helpful tips/talking points to get you started:
      <ul>
        <li>Personal messages are the most powerful.</li>
        <li>Try to be brief, stick to your message and be cordial.</li>
      </ul>
    </aside>
    <section className="fields">
      <Field id="subject" placeholder="enter a subject" onChange={props.onChange('subject')}/>
      <Field id="body" placeholder="compose your letter" type="textarea" onChange={props.onChange('body')}/>
    </section>
  </fieldset>
);

ComposeLetterFields.propTypes = {
  onChange: React.PropTypes.func.isRequired,
};

export default ComposeLetterFields;
