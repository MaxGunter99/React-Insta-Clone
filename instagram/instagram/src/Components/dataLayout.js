import React from 'react';
import PropTypes from 'prop-types';

function PostContainer(props) {
    return (
        <>
            {props.dummyData.map(dummyData => (
                <div key={dummyData.id} className="posts">
                    <img src={dummyData.thumbnailUrl} alt={dummyData.username} />
                    <p>{dummyData.username}</p>
                    <img src={dummyData.imageUrl} alt={dummyData.username} />
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

      })
    )
};
export default PostContainer;