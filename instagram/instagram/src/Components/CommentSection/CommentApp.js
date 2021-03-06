import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import dummyData from '../../dummy-data';


class Commenting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment: ''
    };
}



addComment = event => {
  event.preventDefault();
  const newComment = {task: this.state.comment, completed: false, id: Date.now() };
  this.setState({
    comments: [...this.state.comments, newComment],
    comment: ''
  });
};

changeComment = event => this.setState({ comment: event.target.value });
toggleTodoComplete = id => {
    let comments = this.state.comments.slice();
    comments = comments.map(comment => {
        if (comment.id === id) {
            return comment;
        } else {
            return comment;
        }
    });
    this.setState({ comments });
};

render() {
    console.log(this.props.dummyData.username);
    return (
      <div>
        <CommentList
          handleToggleComplete={this.toggleCommentComplete}
          comments={this.state.comments}         
        />
        <CommentForm      
          value={this.state.comment}         
          handleCommentChange={this.changeComment}
          handleAddComment={this.addComment}
          comment={this.props.comment}
          username={this.props.dummyData.username}
        />
      </div>
    );
  }
}

export default Commenting;