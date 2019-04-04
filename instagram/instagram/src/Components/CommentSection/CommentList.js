import React from 'react';
import Comment from './comment';

const CommentList = props => {
    return(
        <div>
            {props.comments.map(comment => (
                <Comment
                    handleToggleComplete={props.handleToggleComplete}
                    key={comment.id}
                    comment={comment}
                />
            ))}
        </div>
    );
};

export default CommentList;