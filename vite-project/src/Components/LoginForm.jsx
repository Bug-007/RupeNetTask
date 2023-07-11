import React from "react";

// define a custom style object for the login page component
const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f0f0f0",
  },
  form: {
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
  input: {
    width: "100%",
    margin: "10px 0",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    margin: "10px 0",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
  error: {
    color: "#ff0000",
  },
};

// define a function component that renders a login page with validation check and error message
function LoginPage() {
  // state variables to store the username and password
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // state variable to store the error message
  const [error, setError] = React.useState("");

  // function to handle the change of username input
  function handleUsernameChange(event) {
    // update the username state variable with the input value
    setUsername(event.target.value);
  }

  // function to handle the change of password input
  function handlePasswordChange(event) {
    // update the password state variable with the input value
    setPassword(event.target.value);
  }

  // function to handle the form submission
  function handleSubmit(event) {
    // prevent the default browser behavior of reloading the page
    event.preventDefault();

    // check if both fields are filled
    if (username && password) {
      // clear the error message
      setError("");

      // perform the login logic here
      // for simplicity, we assume that the username and password are both "admin"
      if (username === "admin" && password === "admin") {
        // login successful, redirect to another page or show a success message
        alert("Login successful");
      } else {
        // login failed, show an error message
        setError("Invalid username or password");
      }
    } else {
      // set the error message
      setError("Please fill in both fields");
    }
  }

  return (
    <div style={style.container}>
      <p>Task 1 </p>
      usename = admin, password = admin
      <form style={style.form} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          style={style.input}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={style.input}
        />
        <button type="submit" style={style.button}>
          Login
        </button>
        {error && <p style={style.error}>{error}</p>}
      </form>
      Please Scroll Down To See Other Tasks.
    </div>
  );
}

export default LoginPage;
