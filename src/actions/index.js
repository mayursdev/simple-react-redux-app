const handleIncrement = (count) => {
  return {
    type: "INCREMENT_COUNT",
    payload: count
  };
};

const handleDecrement = (count) => {
  return {
    type: "DECREMENT_COUNT",
    payload: count
  };
};

export { handleIncrement, handleDecrement };
