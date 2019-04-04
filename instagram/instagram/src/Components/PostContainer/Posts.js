import React from 'react';
import PropTypes from "prop-types";
import dummyData from '../../dummy-data';
import heart from '../Images/heart.png';
import comment from '../Images/comment.png';
import share from '../Images/share.png';
import Commenting from '../CommentSection/CommentApp';
import styled, { css } from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';



function PostContainer(props){

    return (
        <>
            <SearchBar/>


            {props.posts.map(dummyData => (

                <div key={dummyData.id} className='post'>

                    <div className='top'>

                        <img src={dummyData.thumbnailUrl} alt={dummyData.username}/>
                        <p><strong>{dummyData.username}</strong></p>

                    </div>

                    <div className='middle'>

                        <img src={dummyData.imageUrl} alt={dummyData.username} />

                    </div>

                    <div className='bottom'>

                        <Actions>

                            <button className='like' onClick={() => props.addLikes(dummyData.username)}><img src={heart}/></button>
                            <button className='comment' id='toggle'><img src={comment}/></button>
                            <button className='share'><img src={share}/></button>

                        </Actions>

                        <BottomP>{dummyData.likes}<Strong>likes</Strong></BottomP>
                        {dummyData.comments && dummyData.comments.map(e => <BottomP  key={e.id}> <strong>{e.username}</strong>{e.text}</BottomP>)}

                        <Commenting dummyData={dummyData} comment={props.comment}/>

                        <BottomP>{dummyData.timestamp}</BottomP>

                    </div>


                </div>

            ))}
        </>
    )
}

const BottomP = styled.text`
    display: flex;
    justify-content: flex-start;
    line-height: 30px;
`;

const Strong = styled.text`
    margin-left: 5px;
`;

const Actions = styled.text`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;




PostContainer.propTypes = {

    post: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired
                })
            )
        })
    )

}

// PostContainer.defaultProps = {
//     dummyData: dummyData
// };

export default PostContainer;

