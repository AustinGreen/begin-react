/* global fetch */
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("...loading");
  const [newMsg, setNewMsg] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await (await fetch("/api")).json();
        setMessage(data.message);
      } catch (err) {
        setMessage(err.message);
      }
    }
    fetchData();
  });

  const updateButton = async () => {
    let data = await fetch("/api", {
      method: "post",
      body: JSON.stringify({ message: newMsg }),
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
        />
        <button onClick={updateButton}>Submit</button>
        <p>Change me!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;
