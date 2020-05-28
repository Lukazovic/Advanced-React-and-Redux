import React from "react";
import { reduxForm, Field } from "redux-form";

function Signup({ handleSubmit }) {
  const onSubmit = formProps => {
    console.log(formProps);
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

export default reduxForm({ form: "signup" })(Signup);
