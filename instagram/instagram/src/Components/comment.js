import React from 'react';

const Todo = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: 'line-through', marginLeft: '0px', backgroundColor: 'white', color: 'black', transition: '1s'} : null }
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;