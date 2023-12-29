// https://www.npmjs.com/package/react
import { useState, useEffect } from "react";

// https://www.npmjs.com/package/axios // call data from backend
import axios from "axios";

// Any:
import "./join.scss";


const Join = () => {
    //---------------------------------------------- Check data from be ----------------------------------------------//
    const [join, setJoin] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/join")
            .then((response) => {
                console.log("response: ", response);
                if (response.data && response.data.data.length > 0) {
                    setJoin(response.data.data);
                }
            })
            .catch((err) => console.log("error: ", err));
    }, []);


    const renderJoin = () => {
        return join.map((item, index) => {
            return (
                <div className="item" key={index}>
                    <img className="item-image" src={item.image} alt="Error"></img>
                    <div className="Container">
                        <div className="Left">
                            <div className="item-title">{item.title}</div>
                            <div className="item-description">{item.description}</div>
                            <div className="item-signup">{item.signup}</div>
                        </div>
                        <div className="Right">
                            <li className="item-tip">{item.tip1}</li>
                            <li className="item-tip">{item.tip2}</li>
                            <li className="item-tip">{item.tip3}</li>
                            <li className="item-tip">{item.tip4}</li>
                            <li className="item-tip">{item.tip5}</li>
                            <li className="item-tip">{item.tip6}</li>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div id="Join">{renderJoin()}</div>
    )
}
export default Join