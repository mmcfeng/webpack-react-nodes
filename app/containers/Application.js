import React from 'react';
import Nav from '../components/Nav';

export default class Application extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
			  <Nav />
			</div>
		)
	}
}