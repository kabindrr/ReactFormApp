import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
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
        <div className="display">{name}</div>
        <hr />

        <div className="form">
          <form action="" onSubmit={handleOnSubmit}>
            <input type="text" onChange={handleOnChange} />
            <button>Add User</button>
          </form>
        </div>
        <hr />
        <ul>
          {/* {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))} */}
          {list.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
