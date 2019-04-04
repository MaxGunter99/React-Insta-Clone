import React from 'react';

const Comment = props => {
  return (
    <div
      style={props.comment.completed ? { textDecoration: 'line-through', marginLeft: '0px', backgroundColor: 'white', color: 'black', transition: '1s'} : null }
    >
      <strong>Void_Chaser</strong>{props.comment.task}
    </div>
  );
};

export default Comment;