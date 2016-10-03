import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
require('file?name=[name].[ext]!../index.html');

ReactDOM.render(
	<Root/>,
	document.getElementById('base'));
