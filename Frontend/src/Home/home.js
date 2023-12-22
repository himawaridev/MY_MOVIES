import { useState, useEffect } from "react";  // import method tu react 
import axios from "axios";  // import oxios : nó được dùng để lấy dữ liệu từ phía backend và hỗ trợ render lên brower 
import "./home.css";  // Thêm mục mới vào home.js 
import "./home_reponsive.css"  // Thêm mục mới vào home.js 

function Home() {
    const [films, setFilms] = useState([]);
    // useEffect is
    useEffect(() => {
        axios
            .get("http://localhost:5000/home")
            .then((response) => {
                console.log("response: ", response);
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