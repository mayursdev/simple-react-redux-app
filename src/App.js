import { connect } from "react-redux";
import "./styles.css";
import { handleIncrement, handleDecrement } from "./actions";

function App(props) {
  const { count, handleIncrement, handleDecrement } = props;
  return (
    <div className="App">
      <button onClick={() => handleIncrement(count)}>Increment</button>
      <button onClick={() => handleDecrement(count)}>Decrement</button>
      <p>{count}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps, {
  handleIncrement,
  handleDecrement
})(App);
