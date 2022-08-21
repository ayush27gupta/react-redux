export const incrementCounter = (count) => {
  return (dispatch) => {
    dispatch({
      type: "increment",
      payload: count,
    });
  };
};
export const decrementCounter = (count) => {
  return (dispatch) => {
    dispatch({
      type: "decrement",
      payload: count,
    });
  };
};
