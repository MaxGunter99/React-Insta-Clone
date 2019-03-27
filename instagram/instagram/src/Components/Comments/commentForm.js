import React from 'react';

const CommentForm = props => {
  return (
    <form>        
      <input
        onChange={props.handleCommentChange}
        type='text'
        name='comment'
        value={props.value}
        placeholder='Comment'
                
      />
      <button onClick={props.handleAddComment}>Post</button>        
    </form>
  );
};

export default CommentForm;