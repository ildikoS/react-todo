import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ filteredTasks, setTodos, todos  }) {
    
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTasks.map((todo, index) => (
                        <TodoItem 
                            setTodos={setTodos} 
                            todos={todos} 
                            todo={todo} 
                            key={index}
                            text={todo.text}
                        />
                    ))    
                }
            </ul>
        </div>
    );
}

export default TodoList;