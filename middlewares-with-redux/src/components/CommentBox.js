import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import requireAuth from "./requireAuth";

const CommentBox = ({ saveComment, fetchComments, history }) => {
  const [comment, setComment] = useState();

  const handleChange = evt => {
    setComment(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    saveComment(comment);
    setComment("");
    history.push("/");
  };

  const handleFetchComments = evt => {
    fetchComments();
    history.push("/");
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
      <button className="fetch-comments" onClick={handleFetchComments}>
        Fetch Comments
      </button>
    </div>
  );
};

export default connect(null, actions)(requireAuth(CommentBox));
