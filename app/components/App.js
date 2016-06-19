import React from 'react';
import Notes from './Notes';
import uuid from 'node-uuid';

export default class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			notes : [
			  {id:uuid.v4(),task:'Learn Webpack'},
			  {id:uuid.v4(),task:'Learn React'},
			  {id:uuid.v4(),task:'Do Lanuary'}
		    ]
		}
	}

	addNote = ()=>{
		this.setState({notes:this.state.notes.concat([{id:uuid.v4(),task:'add now note'}])},()=>{
			console.log('setState complete.');
		});
	}

	editNote = (id, task) => { // Don't modify if trying set an empty value if(!task.trim()) { return; }
		const notes = this.state.notes.map(note => { 
			if(note.id === id && task) { 
				note.task = task;
			}
			return note
		});
		this.setState({notes});
	};


	render(){
		const {notes} = this.state;
		return (
			<div>
				<button onClick={this.addNote}>add</button>
				<Notes  notes={notes} onEdit={this.editNote} />
			</div>
		)
	}
}