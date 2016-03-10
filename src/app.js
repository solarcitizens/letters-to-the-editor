'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import otherComponent from './component';

var reactRoot = document.getElementById('react-root');

var component = <div>{otherComponent}</div>;

ReactDOM.render(component, reactRoot);
