import "./popular.scss";
import "./popular_responsive.scss";
import { useState, useEffect } from "react";
import axios from "axios";


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
            return (
                <div key={index}>
                    <img src={item1.image}></img>
                    name: {item1.name},
                    date: {item1.date},
                    statistical: {item1.statistical},
                </div>
            );
        });
    };
    const renderPopularRight = () => {
        return popularRight.map((item2, index) => {
            return (
                <div key={index}>
                    <div>{item2.notification}</div>
                </div>
            );
        });
    };
    //---------------------------------------------- Use onclick ----------------------------------------------//
    const [toggleState, setToggleState] = useState(false)
    const toggleTab = () => {
        setToggleState(!toggleState);
        console.log(toggleState)
    }
    return (
        <div id="Popular">
            <div className="Title">
                <div className="Title-name">What's Popular</div>
                <div className="Wrapper">
                    <div className="zz" onClick={toggleTab}>Popular</div>
                </div>
            </div>
            <div className="Content">
                {toggleState ? <div>{renderPopularLeft()}</div> : <div>{renderPopularRight()}</div>}
            </div>
        </div>
    )
}
export default Popular;