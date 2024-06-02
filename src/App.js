import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  const [list, setList] = useState([]);

  const addUser = (name) => {
    setList([...list, name]);
  };

  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
      }}
    >
      <div
        className="userList"
        style={{ boxShadow: "0 0 10px grey", padding: "2rem" }}
      >
        <Form addUser={addUser} />

        <List list={list} />
      </div>
    </div>
  );
}

export default App;
