import { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import User from "./components/User/User";

function App() {
  const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  // READ
  const fetchUsers = async () => {
    await fetch(USERS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };

  // CREATE => POST
  const addUser = async (newUser) => {
    await fetch(USERS_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    })
      .then((res) => {
        //res 201 - Created OK
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [data, ...users]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // DELETE
  const deleteUser = async (id) => {
    await fetch(`${USERS_ENDPOINT}/${id}`, { method: "DELETE" })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => console.log(err));
  };

  const user = users.map((user) => (
    <User
      id={user.id}
      key={user.id}
      name={user.name}
      email={user.email}
      onDelete={deleteUser}
    />
  ));

  return (
    <div className="App">
      <h2>SIL Frontend Engineer Assessment</h2>
      <AddUser addUser={addUser} />
      <br />
      <div>{user}</div>
    </div>
  );
}

export default App;
