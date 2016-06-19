import React from 'react';

const HoneypotField = props => {

  return (
    <fieldset>
      <div className="no-bots-allowed">
        <label><input type="checkbox" onChange={props.onChange('isBot')}/>I am a bot.</label>
      </div>
    </fieldset>
  );
}


HoneypotField.propTypes = {
  onChange: React.PropTypes.func.isRequired
};

export default HoneypotField;
