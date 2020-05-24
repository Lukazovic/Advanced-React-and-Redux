import React from "react";
import { connect } from "react-redux";

const CommentList = ({ comments }) => {
  const renderComments = comments.map((comment, index) => (
    <li key={index}>{comment}</li>
  ));

  return (
    <div>
      <h4>Comment List</h4>
      <ul>{renderComments}</ul>
    </div>
  );
};

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);
