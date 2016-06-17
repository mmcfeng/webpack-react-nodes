import './TodoList.css';
import React from 'react';
import uid from 'node-uuid';

export default class TodoList extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
          notes:[
              {id:uid.v4(),text:'list one'},
              {id:uid.v4(),text:'list two'},
              {id:uid.v4(),text:'list three'},
              {id:uid.v4(),text:'list four'},
              {id:uid.v4(),text:'list five'}
          ] 
        }
    }

    addNote(){
        this.setState({notes:this.state.notes.push({id:uid.v4(),text:'add new'})})
    }

    render() {
        return (
          <div>
            <button onClick={()=>{this.addNote()}}>add</button>
            <ul className="todo-list">
              {this.state.notes.map(note=>{
                  return <li key={note.id}>{note.text}</li>
              })}
            </ul>
          </div>
        )
    }
}