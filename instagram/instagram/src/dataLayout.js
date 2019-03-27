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
import '/Users/voidchaser/Lambda/React-Insta-Clone/instagram/instagram/src/comments.css';

function PostContainer(props) {

    return (
        <>
            <div className='instagram'>
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
            </div>
            <p className='even'></p>
            {props.dummyData.map(dummyData => (
                <div key={dummyData.id} className="posts">
                    {/* username and profile image */}

                    <div className='top'>
                        <div classname='user'>
                            <img className='profile' src={dummyData.thumbnailUrl} alt={dummyData.username} />
                            <p><strong>{dummyData.username}</strong></p>
                        </div>

                        <strong>...</strong>
                        
                    </div>
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
                    <div className='comments'>
                        {dummyData.comments &&
                            dummyData.comments.map(e => <p  key={e.id}> <strong>{e.username}</strong> {e.text}</p>)
                        }
                        <Commenting />
                        <p className='timestamp'>{dummyData.timestamp}</p>
                    </div>
                </div>
            ))}
        </>
    );
}
  
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