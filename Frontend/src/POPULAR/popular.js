// https://www.npmjs.com/package/react
import { useState, useEffect } from "react";

// https://www.npmjs.com/package/axios // call data from backend
import axios from "axios";

// https://www.npmjs.com/package/react-circular-progressbar // Dung de hien thi vong tron phan tram
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Any:
import "./popular.scss";
import "./popular_responsive.scss";

const Popular = () => {
    const [popularLeft, setPopularLeft] = useState([]);
    const [popularRight, setPopularRight] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/popular")
            .then((response) => {
                console.log("response: ", response);
                if (response.data && response.data.data.length > 0) {
                    setPopularLeft(response.data.data[0]);
                    setPopularRight(response.data.data[1]);
                }
            })
            .catch((err) => console.log("error: ", err));
    }, []);

    //---------------------------------------------- Render data from backend ----------------------------------------------//

    const renderPopularLeft = () => {
        return popularLeft.map((item1, index) => {
            const percentage = item1.statistical;
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
    const renderPopularRight = () => {
        return popularRight.map((item2, index) => {
            return (
                <div className="item2-notification" key={index}>
                    <div className="item2-notification">{item2.notification}</div>
                </div>
            );
        });
    };

    //---------------------------------------------- Use onclick T-Fs ----------------------------------------------//

    const [toggleState, setToggleState] = useState(false)
    const toggleTab = () => {
        setToggleState(!toggleState);
        console.log(toggleState)
    }

    //---------------------------------------------- React HTML ----------------------------------------------//

    return (
        <div id="Popular">
            <div className="Title">
                <div className="Title-name">What's Popular</div>
                <div className="Wrapper">
                    <div className="zz" onClick={toggleTab}>Popular</div>
                </div>
            </div>
            <div className="Content">
                {toggleState ? <div className="Active-content-right">{renderPopularRight()}</div> : <div className="Active-content-left">{renderPopularLeft()}</div>}
            </div>
        </div>
    )
}
export default Popular;