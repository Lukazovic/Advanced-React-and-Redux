export default ({ dispatch }) => next => async action => {
  if (!action.payload || !action.payload.then) return next(action);

  const response = await action.payload;
  const newAction = { ...action, payload: response };
  dispatch(newAction);
};
