import React from 'react';

function TodoItem(props) {
    //events
    function deleteHandler() {
        props.setTodos(props.todos.filter((elem) => elem.id !== props.todo.id));
        console.log(props.todo);
    };

    function completeHandler() {
        props.setTodos(props.todos.map(item => {
            if(item.id === props.todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
        console.log(props.todo);
    }
    
    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? 'completed' : ''}`}>{props.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="material-icons">&#xe2e6;</i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="material-icons">&#xe872;</i>
            </button>
        </div>
    );
}

export default TodoItem;