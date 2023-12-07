// import React from "react";
import axios from "axios"; // call backend to frontend
import { useEffect } from "react"; // useState
import "./banners.css";
import intro3 from "../IMG/intro3.jpg"
// import intro1 from "../IMG/intro1.jpg";
import { Link } from "react-router-dom";


function Banners() {
    useEffect(() => {
        axios.get('http://localhost:5000/banners')
            .then((response) => {
                console.log("response", response);
            })
            .catch((err) => console.log("error", err));
    });
    return (
        <div className="Banners">
            <div className="Banners-wrapper">
                <img className="Banners-image" src={intro3} alt="error"></img>
            </div>
            <div className="Banners-box">
                <div className="Banners-title">
                    Welcome.
                </div>
                <div className="Banners-content">
                    Millions of movies, TV shows and people to discover. Explore now.
                </div>
                <div className="Banners-type">
                    <input className="Banners-type-content" placeholder="Search for movie, tv show, person" type="text"></input>
                    <div className="Banners-type-icon">Search</div>
                </div>
            </div>
        </div>
    )
}
export default Banners;