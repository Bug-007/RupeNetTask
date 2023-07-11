import React from "react";

// define a custom style object for the child component
const style = {
  paragraph: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#007bff",
  },
};

function ChildComponent(props) {
  // component logic and state variables here
  return (
    // JSX code to render the child component here
    // access the message prop from the props object
    // apply the style object to the paragraph element
    <>
    Task 3
      <p style={style.paragraph}>This is the ChildComponent</p>
      <p style={style.paragraph}>
        The message from the parent is {props.message}
      </p>
    </>
  );
}

export default ChildComponent;
