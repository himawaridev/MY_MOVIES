import React from "react";
import "./trending.css";
import "./trending_responsive.css"
import axios from "axios";

function Trending() {
    return (
        <div id="body">
            <div className="Title">
                <div className="Title-Name">Trending</div>
                <div className="Title-Left">Today</div>
                <div className="Title-Right">This Week</div>
            </div>
            <div className="Content"></div>
        </div>
    );
}
export default Trending;