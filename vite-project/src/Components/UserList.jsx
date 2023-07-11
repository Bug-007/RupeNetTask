import React from "react";

// define a custom style object for the user list component
const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#007bff",
  },
  list: {
    width: "500px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
  item: {
    margin: "10px 0",
    fontSize: "18px",
    color: "#333",
  },
};

function UserList() {
  // state variable to store the list of users fetched from the API
  const [users, setUsers] = React.useState([]);

  // define a function that fetches data from an API endpoint and returns a promise
  function fetchData(url) {
    return fetch(url)
      .then((response) => response.json()) // convert the response to JSON format
      .then((data) => data) // return the data as it is or process it further if needed
      .catch((error) => console.error(error)); // handle any errors that may occur
  }

  // use the useEffect hook to fetch data from the API when the component mounts or updates
  React.useEffect(() => {
    // call the fetchData function with an API endpoint of your choice and store its result in a variable
    const result = fetchData("https://jsonplaceholder.typicode.com/users");

    // update the users state variable with the result when it is resolved
    result.then((data) => setUsers(data));
  }, []); // pass an empty dependency array to run this effect only once

  return (
    // JSX code to render the user list component here
    // apply the style object to the container, heading, list and item elements
    <div style={style.container}>
        Task 4
      <h1 style={style.heading}>User List</h1>
      <ul style={style.list}>
        {users.map((user) => (
          <li key={user.id} style={style.item}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
