import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import * as actions from "../actions";

const App = ({ auth, changeAuth }) => {
  const handleSignButtonClick = () => {
    changeAuth(!auth);
  };

  const signButton = (
    <button onClick={handleSignButtonClick}>
      {auth ? "Sign out" : "Sign in"}
    </button>
  );

  const navBar = (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post a comment</Link>
      </li>
      <li>{signButton}</li>
    </ul>
  );

  return (
    <div>
      {navBar}
      <Route exact path="/post" component={CommentBox} />
      <Route exact path="/" component={CommentList} />
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, actions)(App);
