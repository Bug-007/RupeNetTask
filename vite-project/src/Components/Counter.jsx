import React from "react";

// define a custom style object for the counter component
const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  counter: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#007bff",
  },
  button: {
    width: "100px",
    margin: "10px",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
};

// define a function component that renders a counter with styling
function Counter() {
  // state variable to store the counter value
  const [count, setCount] = React.useState(0);

  // function to increment the counter value by one
  function increment() {
    // update the count state variable by adding one to its current value
    setCount(count + 1);
  }

  // function to decrement the counter value by one
  function decrement() {
    // update the count state variable by subtracting one from its current value
    setCount(count - 1);
  }

  return (
    <div style={style.container}>
        Task 2
      <p style={style.counter}>The counter value is {count}</p>
      <button style={style.button} onClick={increment}>
        Increment
      </button>
      <button style={style.button} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;