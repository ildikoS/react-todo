import React from 'react';

function Form(props) {
  function inputHandler(event) {
    props.setInputText(event.target.value)
  };

  function submitHandler(event) {
    event.preventDefault();
    props.setTodos([
      ...props.todos, 
      {text: props.inputText, completed: false, id: Math.random()*300}
    ]);
    props.setInputText('');
  };

  function statusHandler(event) {
    props.setStatus(event.target.value);
  };

  return (
      <div>
        <form>
            <input value={props.inputText} onChange={inputHandler} type="text" className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">
              <i className="material-icons">&#xf23a;</i>
            </button>
            <div onChange={statusHandler} className="select">
              <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </select>
            </div>
        </form>
      </div>
  );
}

export default Form;