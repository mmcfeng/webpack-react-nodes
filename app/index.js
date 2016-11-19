import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers';

import '../assets/css/nav.css';
import '../assets/css/style.css';
console.log(Routers);
ReactDOM.render(
	<Routers />,
	document.getElementById('appId')
);