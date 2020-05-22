import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const CommentBox = ({ saveComment, fetchComments }) => {
  const [comment, setComment] = useState();

  const handleChange = evt => {
    setComment(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    saveComment(comment);
    setComment("");
  };

  const handleFetchComments = evt => {
    fetchComments();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea name="comment" value={comment} onChange={handleChange} />
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
      <button onClick={handleFetchComments}>Fetch Comments</button>
    </div>
  );
};

export default connect(null, actions)(CommentBox);
