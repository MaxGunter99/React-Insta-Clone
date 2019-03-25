import React from 'react';
import PropTypes from 'prop-types';

function PostContainer(props) {
    return (
        <>
            {props.dummyData.map(dummyData => (
                <div key={dummyData.id} className="posts">
                    <img src={dummyData.thumbnailUrl} alt={dummyData.username} />
                    <h3>{dummyData.username}</h3>
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