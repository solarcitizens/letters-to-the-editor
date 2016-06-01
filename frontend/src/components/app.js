import React from 'react';
import LetterForm from './LetterForm';

const App = () => (
  <div className="lettersToTheEditor container">
    <div className="header">
      <img alt="Solar Citizens Logo" id="logo" src="../images/solar-citizens-logo.png"/>
    </div>
    <div className="row">
      <div className="campaignTitle">
        <h1>Letters to the Editor</h1>
      </div>
      <div className="campaignDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum ligula ac mauris vehicula, consectetur accumsan dolor vehicula. Duis eget justo vitae diam consequat rutrum sit amet id nulla. Phasellus cursus nulla eu ante sodales, at fermentum dolor bibendum. Morbi vestibulum vehicula ultrices. Maecenas sed tellus in velit porta convallis et et sapien. Nulla dictum vel magna vitae tincidunt.
      </div>
      <div className="formContainer">
        <div className="formHeader">
          <h3>Take Action</h3>
          <div className="formTitle">Send Your Letter to Local Media</div>
        </div>
        <div className="arrowDown"/>
        <LetterForm/>
      </div>
    </div>
  </div>
);

export default App;
