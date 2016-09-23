//import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import '../css/classification.css'
import '../css/react-treeview.css'
require('file?name=[name].[ext]!../index.html');

ReactDOM.render(
	<Root/>,
	document.getElementById('base'));
