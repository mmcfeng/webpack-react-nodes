import React from 'react';
import Nav from '../components/Nav';
export default class PersonalCenter extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div style={{background:'red'}}>
			  <Nav />
			  <div><h4>my home</h4></div>
			</div>
		)
	}
}