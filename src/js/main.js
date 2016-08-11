import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
require('file?name=[name].[ext]!../index.html');

//TODO replace with babel polyfill
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

ReactDOM.render(
	<Root/>,
	document.getElementById('base'));
