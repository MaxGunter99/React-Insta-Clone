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

            <Nav>
                <SearchBar/>
            </Nav>

            <NavSpace><p>hi</p></NavSpace>

            {props.posts.map(dummyData => (

                <div key={dummyData.id} className='post'>

                    <Posts>

                        <div className='top'>

                            <Top>
                                <img src={dummyData.thumbnailUrl} alt={dummyData.username}/>
                                <p><strong>{dummyData.username}</strong></p>
                            </Top>

                        </div>

                        <div className='middle'>

                            <Middle>
                                <img src={dummyData.imageUrl} alt={dummyData.username} />
                            </Middle>

                        </div>

                        <div className='bottom'>

                            <Actions>

                                <button className='like' onClick={() => props.addLikes(dummyData.username)}><img src={heart}/></button>
                                <button className='comment' id='toggle'><img src={comment}/></button>
                                <button className='share'><img src={share}/></button>

                            </Actions>

                            <BottomP>{dummyData.likes}<Strong>likes</Strong></BottomP>

                            {dummyData.comments && dummyData.comments.map(e => <BottomP  key={e.id}> <strong>{e.username}</strong>{e.text}</BottomP>)}

                            <Comms>
                                <Commenting dummyData={dummyData} comment={props.comment}/>
                            </Comms>

                            <BottomP>{dummyData.timestamp}</BottomP>

                        </div>

                    </Posts>


                </div>

            ))}
        </>
    )
}

const Nav = styled.text`
    position: fixed;
    width: 100%;
    top: 0;
    margin-left: 0;
`;

const NavSpace = styled.text`
    margin-top: 300px;
    width: 100%;
`;

const BottomP = styled.text`
    display: flex;
    justify-content: flex-start;
    line-height: 30px;
    strong{
        margin-left: 5px;
    }
`;

const Strong = styled.text`
    margin-left: 5px;
`;

const Middle = styled.text`
    img{
        width: 100%;
    }
`;

const Actions = styled.text`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    button {
        border: 0px;
        margin: 5px;
        img{
            height: 30px;
            width: auto;
            align-items: center;
        }
    }
`;

const Top = styled.text`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img{
        height: 40px;
        border-radius: 100px;
        margin: 10px;
    }
`;

const Posts = styled.div`
    background-color: white;
    width: 50%;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px;
    background-color: white;

`;

const Comms = styled.div`
    display: flex;
    justift-content: flex-start;
    padding-left: 0px;
    margin-left: 5px;
    line-height: 30px;
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

