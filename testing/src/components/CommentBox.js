import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

function CommentBox({ saveComment }) {
  const [comment, setComment] = useState();

  const handleChange = evt => {
    setComment(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    saveComment(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea name="comment" value={comment} onChange={handleChange} />
      <div>
        <button type="submit">Submit Comment</button>
      </div>
    </form>
  );
}

export default connect(null, actions)(CommentBox);
