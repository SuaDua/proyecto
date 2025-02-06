
import React, { useState } from "react";
function App() {
  const [data, setData] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const joke = await response.json();
      setData(joke.value);
    } catch (error) {
      setData("Error al obtener datos");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React API App</h1>
      <button onClick={fetchJoke} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Obtener Chiste de Chuck Norris
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px", color: "blue" }}>{data}</p>
    </div>
  );
}

export default App;
