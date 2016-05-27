import React from 'react';
import LetterForm from './LetterForm';

const App = () => (
  <div className="lettersToTheEditor container">
    <div className="row">
      <div className="campaignTitle">
        <h1>Letters to the Editor</h1>
      </div>
      <div className="campaignDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum ligula ac mauris vehicula, consectetur accumsan dolor vehicula. Duis eget justo vitae diam consequat rutrum sit amet id nulla. Phasellus cursus nulla eu ante sodales, at fermentum dolor bibendum. Morbi vestibulum vehicula ultrices. Maecenas sed tellus in velit porta convallis et et sapien. Nulla dictum vel magna vitae tincidunt. In nec nulla id neque venenatis pellentesque eget vel leo. Etiam condimentum ipsum vitae ex facilisis ullamcorper. Nulla eget enim ut sem sollicitudin maximus. Vestibulum viverra tristique mi, at laoreet dolor dictum eget. Praesent dignissim, nisi quis pulvinar congue, metus ipsum viverra ex, quis ultricies est risus vel augue. Mauris et tincidunt sapien, scelerisque ornare arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse dictum felis vitae arcu auctor rutrum.
      </div>
      <div className="formContainer">
        <LetterForm/>
      </div>
    </div>
  </div>
);

export default App;
