import React from 'react';

const TodoForm = props => {
  return (
    <form>        
      <input
        onChange={props.handleTodoChange}
        type='text'
        name='todo'
        value={props.value}
        placeholder='Comment'
                
      />
      <button onClick={props.handleAddTodo}>Post</button>        
    </form>
  );
};

export default TodoForm;