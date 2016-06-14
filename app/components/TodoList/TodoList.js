import $ from 'jquery';
import './TodoList.css';
import React from 'react';

export default class TodoList extends React.Component{

    render() {
        return (
          <ul className="todo-list">
            <li>list one</li>
            <li>list one</li>
            <li>list one</li>
            <li>list one</li>
            <li>list one</li>
            <li>list one</li>
          </ul>
        )
    }
}