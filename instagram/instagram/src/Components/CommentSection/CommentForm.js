import React from 'react';
import styled, { css } from 'styled-components';

const CommentForm = props => {
    return(
        <form>
            <input
                onChange={props.handleCommentChange}
                type='text'
                name='comment'
                value={props.value}
                placeholder='comment'
            />
            <Input type='button' onClick={(e) => {console.log(props.username); props.comment(props.username, props.value, e)}}>Post</Input>

        </form>
    );
};

const Input = styled.text `
    height: 20px;
    font-size: 15px;
    border-radius: 10px;
    color: white;
    background-color: black;
    padding: 5px;
    margin-left: 5px;
`;

export default CommentForm;