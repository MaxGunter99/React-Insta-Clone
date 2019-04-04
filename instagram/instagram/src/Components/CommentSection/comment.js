import React from 'react';

const Comment = props => {
    return (
        <div 
            style={props.comment.completed ? {color: 'red'} : null}
        >
            <strong>Void_Chaser</strong>{props.comment.task}
        </div>
    );
};

export default Comment;