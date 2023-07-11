import React from "react";
import ChildComponent from "./ChildComponent";

// define a custom style object for the parent component
const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  button: {
    width: "150px",
    margin: "10px",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
};

function ParentComponent() {
  // state variable to store the message value
  const [message, setMessage] = React.useState("Hello");

  // function to update the message value with a new value
  function updateMessage() {
    // update the message state variable with a new value of your choice
    setMessage("Goodbye");
  }

  // component logic and other state variables here
  return (
    // JSX code to render the parent component here
    // include the child component as a child element here
    // pass the message state variable as a prop to the child component
    // apply the style object to the container and button elements
    <div style={style.container}>
      <ChildComponent message={message} />
      <button style={style.button} onClick={updateMessage}>
        Update Message
      </button>
    </div>
  );
}

export default ParentComponent;
