import React from "react";

export default class Note extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			editing : false
		}
	}

	renderEdit=()=>{
		return <input type='text'
			ref={(e)=>e?e.selectionStart= this.props.task.length:null}
			autoFocus={true} 
			defaultValue={this.props.task} 
			onBlur={this.finishEdit} 
			onKeyPress={this.checkEnter}/>
	}

	renderNote=()=>{
		return <div onClick={this.edit}>{this.props.task}</div>
	}

	edit=()=>{
		this.setState({editing : true})
	}

	checkEnter=(e)=>{
		if (e.key==='Enter') this.finishEdit(e)
	}

	finishEdit=(e)=>{
		const value = e.target.value;
		if (this.props.onEdit) {
			this.props.onEdit(value)
		}
		this.setState({editing:false})
	}

	render(){
		//根据state渲染不同的组件
		if (this.state.editing) {
			return this.renderEdit()
		}
		return this.renderNote();
	}
}