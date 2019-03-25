import React from 'react';

import PropTypes from 'prop-types';

function PostContainer(props) {
    return (
        <>
            <div className='instagram'>
                <p><strong>Instagram</strong></p>
            </div>
            {props.dummyData.map(dummyData => (
                <div key={dummyData.id} className="posts">
                    {/* username and profile image */}

                    <div className='top'>
                        <img className='profile' src={dummyData.thumbnailUrl} alt={dummyData.username} />
                        <p><strong>{dummyData.username}</strong></p></div>
                    <img className='picture' src={dummyData.imageUrl} alt={dummyData.username} />

                    {/* likes */}
                    <p className='likes'>{dummyData.likes} Likes</p>

                    {/* comments */}
                    <div className='comments'>
                        {dummyData.comments &&
                            dummyData.comments.map(e => <p  key={e.id}> <strong>{e.username}</strong> {e.text}</p>)}
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