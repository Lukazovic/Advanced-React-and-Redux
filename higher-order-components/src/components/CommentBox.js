import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const CommentBox = ({ saveComment, fetchComments, auth, history }) => {
  const [comment, setComment] = useState();

  useEffect(() => {
    if (!auth) {
      // alert("You need to sign in to post comments!");
      history.push("/");
    }
  }, [auth, history]);

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
      <button className="fetch-comments" onClick={handleFetchComments}>
        Fetch Comments
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, actions)(CommentBox);
