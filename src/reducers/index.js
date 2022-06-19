import { combineReducers } from "redux";

const countReducer = (count = 0, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      const newCount = action.payload + 1;
      return newCount;

    case "DECREMENT_COUNT":
      return action.payload - 1;

    default:
      return count;
  }
};

export default combineReducers({
  count: countReducer
});
