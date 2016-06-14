import TodoList from './components/TodoList/TodoList.js';
import React from 'react';
import ReactDOM from 'react-dom'

console.log(React);
ReactDOM.render(
	<TodoList />,
	document.getElementById('appId')
);