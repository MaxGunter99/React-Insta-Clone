import React from 'react';
import PropTypes from 'prop-types';
import logo from './src/InstagramLogo.png';
import instagram from './src/InstagramText.png';
import heart from './src/heart.png';
import compass from './src/compass.png';
import profile from './src/profile.png';
import comment from './src/comment.png';
import bookmark from './src/bookmark.png';
import share from './src/share.png';
import Commenting from './Components/Comments/commentapp';
import dummyData from './Components/dummy-data';
import App from './likesapp';
import styled, { css } from 'styled-components'

function PostContainer(props) {

    return (
        <>
            <Instagram className='instagram'>
                <div className='logo'>
                    <img src={logo} />
                    <img src={instagram} />
                </div>
                <input></input>
                <div className='connect'>
                    <img src={compass} />
                    <img src={heart} />
                    <img src={profile} />
                </div>
            </Instagram>
            <p className='even'></p>
            {props.dummyData.map(dummyData => (
                <div key={dummyData.id} className="posts">
                    {/* username and profile image */}

                    <Div2 className='top'>
                        <div classname='user'>
                            <img className='profile' src={dummyData.thumbnailUrl} alt={dummyData.username} />
                            <p><strong>{dummyData.username}</strong></p>
                        </div>

                        <strong>...</strong>
                        
                    </Div2>
                    <img className='picture' src={dummyData.imageUrl} alt={dummyData.username} />

                    {/* likes */}
                    <div class='likes'>
                        <div>
                            <div className='likeNumber'>
                                <App />
                            </div>
                            <div className='uneventful'>
                                <img className='comment'src={comment} />
                                <img className='share'src={share} />
                            </div>
                        </div>
                        <div className='book'>
                            <img className='bookmark'src={bookmark} />
                        </div>
                    </div>

                    {/* comments */}
                    <Div className='comments'>
                        {dummyData.comments &&
                            dummyData.comments.map(e => <p  key={e.id}> <strong>{e.username}</strong> {e.text}</p>)
                        }
                        <Commenting />
                        <Timestamp className='timestamp'>{dummyData.timestamp}</Timestamp>
                    </Div>
                </div>
            ))}
        </>
        
        
    );
    
}

const Timestamp = styled.text`
    height: 30px;
    font-size: 15px;
    color: grey;
`;

const Div = styled.div`
    width: 625px;
    margin: 0 auto;
    border-left: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    margin-bottom: 20px;
    display: flex;
    flex-flow: column;
    background-color: white;
    padding-top: 0px;
`;

const Div2 = styled.div`
    width: 605px;
    padding: 10px;
    border: 1px solid lightgray;
    margin: 0 auto;
    align-items: center;
    background-color: white;
    display: inline-flex;
    justify-content: space-between;
`;

const Instagram = styled.div`
    border: 1px solid lightgrey;
    width: 100%;
    margin-left: 0;
    font-size: 20px;
    margin-bottom: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    left: 0px;
    background-color: white;
    z-index: 500;
    top: 0;
`;


  
PostContainer.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            likes: PropTypes.number,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                  id: PropTypes.string.isRequired,
                  username: PropTypes.string.isRequired,
                  text: PropTypes.string.isRequired
                })
            ),
            timestamp: PropTypes.string,

        })
    )
};

export default PostContainer;