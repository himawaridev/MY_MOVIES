// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";

function Home() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/home")
      .then((response) => {
        console.log("response", response);
        if (response.data && response.data.data.length > 0) {
          setFilms(response.data.data);
        }
      })
      .catch((err) => console.log("error", err));
  }, []);

  const renderFilms = () => {
    return films.map((item) => {
      return (
        <div>
          Title: {item.title} <br />
          Description: {item.description}
          <br />
        </div>
      );
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        {renderFilms()}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
