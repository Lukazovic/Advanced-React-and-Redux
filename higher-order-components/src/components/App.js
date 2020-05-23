import React from "react";
import { Route } from "react-router-dom";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

export default () => {
  return (
    <div>
      <Route exact path="/post" component={CommentBox} />
      <Route exact path="/" component={CommentList} />
    </div>
  );
};
