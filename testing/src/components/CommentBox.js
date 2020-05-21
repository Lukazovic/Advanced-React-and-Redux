import React, { useState } from "react";

function CommentBox() {
  const [comment, setComment] = useState();

  const handleChange = evt => {
    setComment(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
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

export default CommentBox;
