import React from 'react';

import Todo from './comment';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => (
                <Todo
                    handleToggleComplete={props.handleToggleComplete}
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    );
};

export default TodoList;