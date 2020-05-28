import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

export default ChildComponent => {
  const ComposedComponent = props => {
    useEffect(() => {
      if (!props.auth) {
        // alert("You need to sign in to post comments!");
        props.history.push("/");
      }
    }, [props.auth, props.history]);

    return <ChildComponent {...props} />;
  };

  const mapStateToProps = state => ({
    auth: state.auth.authenticated,
  });

  return connect(mapStateToProps, actions)(ComposedComponent);
};
