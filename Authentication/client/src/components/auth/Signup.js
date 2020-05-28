import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

function Signup({ handleSubmit, signup }) {
  const onSubmit = formProps => {
    signup(formProps);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name="email" type="text" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="text"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <button>Sign Up!</button>
    </form>
  );
}

export default compose(
  connect(null, actions),
  reduxForm({ form: "signup" })
)(Signup);
