import { Router, Route, browserHistory } from 'react-router';
import React from 'react';
import App from './containers/Application';
import PersonalCenter from './containers/PersonalCenter';

export default class Routers extends React.Component {

	render(){
		return (
		  <Router history={browserHistory}>
			<Route path="/" component={App}></Route>
			<Route path="/personalcenter" component={PersonalCenter}></Route>
		  </Router>
		)
	}
}
