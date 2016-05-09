// @flow
import React from 'react';
import ReactDOM from 'react-dom';

let App = React.createClass({
  render() {
    return (
      <div className="lettersToTheEditor">
        <h1>IT WORKS!!</h1>
        <PersonalDetails/>
      </div>
    );
  }
});

let PersonalDetails = React.createClass({
  render() {
    return (
      <div className="personal">
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('react-root')
);
