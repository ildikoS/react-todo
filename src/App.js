import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //States
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState([]);

  //Use effects
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    switch(status){
      case 'completed':
        setFilteredTasks(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTasks(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTasks(todos)
        break;
    }

    saveLocalTodos();
  }, [todos, status]);


  //Save to local
  function saveLocalTodos() {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  //Get datas back from localStorage
  function getLocalTodos() {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let localDatas = JSON.parse(localStorage.getItem('todos'));
      setTodos(localDatas);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>My To-Do List</h1>
      </header>
      <Form 
        inputText={input} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInput}
        setStatus={setStatus}
        setFilteredTasks={setFilteredTasks}
        />
      <TodoList 
        filteredTasks={filteredTasks} 
        setTodos={setTodos} 
        todos={todos} 
      />
    </div>
  );
}

export default App;
