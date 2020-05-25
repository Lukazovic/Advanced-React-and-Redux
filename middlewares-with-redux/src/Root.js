import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import asyncMiddleware from "./middlewares/async";
import reducers from "./reducers";

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(asyncMiddleware)
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
