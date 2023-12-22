import React, { useState, useEffect } from "react";
import "./trending.scss";
import "./trending_responsive.scss";
import axios from "axios";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'


function Trending() {
    // craw data
    const [filmLeft, setListFilmLeft] = useState([]);
    const [filmRight, setListFilmRight] = useState([]);
    const [hoverdImage, setHoverdImage] = useState('');
    useEffect(() => {
        axios
            .get('http://localhost:5000/trending')
            .then((response) => {
                console.log("response: ", response);
                if (response.data && response.data.data.length > 0) {
                    setListFilmLeft(response.data.data[0]);
                    setListFilmRight(response.data.data[1]);
                }
            })
            .catch((err) => console.log("error: ", err));
    }, []);
    const renderFilmLeft = () => {
        return filmLeft.map((item1, index) => {
            // Ham random tinh toan min max
            const percentage = item1.statistical;
            // biến percentage random truyền  vào if 
            let color = '';
            if (percentage >= 70) {
                color = 'rgb(19, 194, 66)';
            }
            else if (percentage < 70 && percentage >= 30) {
                color = 'rgb(232, 252, 3)';
            }
            else {
                color = 'rgb(252, 3, 3)';
            };
            return (
                <div className="item" key={index}>
                    <img className="item-image" src={item1.image}></img>
                    {/* npm percent : dung de hien thi vong tron % */}
                    <CircularProgressbar className="item-statistical"
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({ pathColor: color, rotation: 0.05, textSize: '35px', textColor: '#ffffff', trailColor: '#4c4f52' })}
                    />
                    <div className="item-name">{item1.name}</div>
                    <div className="item-date">{item1.date}</div>
                </div>
            );
        });
    };
    const renderFilmRight = () => {
        return filmRight.map((item2, index) => {
            const percentage = item2.statistical;
            // biến percentage random truyền  vào if 
            let color = '';
            if (percentage >= 70) {
                color = 'rgb(19, 194, 66)';
            }
            else if (percentage < 70 && percentage >= 30) {
                color = 'rgb(232, 252, 3)';
            }
            else {
                color = 'rgb(252, 3, 3)';
            };
            return (
                <div className="item" key={index}>
                    <img className="item-image" src={item2.image}></img>
                    <CircularProgressbar className="item-statistical"
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({ pathColor: color, rotation: 0.05, textSize: '35px', textColor: '#ffffff', trailColor: '#4c4f52' })}
                    />
                    <div className="item-name">{item2.name}</div>
                    <div className="item-date">{item2.date}</div>
                </div>
            );
        });
    };

    // Title tabs
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <div id="Trending">
            <div className="Title">
                <div className="Title-Name">Trending</div>
                <div className="Wrapper">
                    <div className={toggleState === 1 ? "Title-content Active-tabs" : "Title-content"} onClick={() => toggleTab(1)}>Today</div>
                    <div className={toggleState === 2 ? "Title-content Active-tabs" : "Title-content"} onClick={() => toggleTab(2)}>This Week</div>
                </div>
            </div>
            <div className="Content">
                {/* {
                    toggleState === 1 ? renderFilmLeft() : toggleState === 2 && renderFilmRight()
                } */}
                <div className={toggleState === 1 ? "Active-content" : "Show-content"}>{renderFilmLeft()}</div>
                <div className={toggleState === 2 ? "Active-content" : "Show-content"}>{renderFilmRight()}</div>
            </div>
        </div>
    );
}
export default Trending;
