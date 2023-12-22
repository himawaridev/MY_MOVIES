import axios from "axios";
import { useState, useEffect } from "react";
import { Player } from "video-react";
import "./trailers.scss";


// import Video from ""

function Trailers() {
    const [listTrailersLeft, setListTrailersLeft] = useState([]);
    const [listTrailersRight, setListTrailersRight] = useState([]);
    const [hoverdImage, setHoverdImage] = useState('');
    useEffect(() => {
        axios
            .get("http://localhost:5000/trailers")
            .then((response) => {
                console.log("response: ", response);
                if (response.data && response.data.data.length > 0) {
                    setListTrailersLeft(response.data.data[0]);
                    setListTrailersRight(response.data.data[1]);
                }
            })
            .catch((err) => console.log("error: ", err));

    }, []);
    // Render video 
    const renderVideoLeft = () => {
        return listTrailersLeft.map((item1, index) => {
            return (
                <div className="item" key={index}>
                    <img src={item1.image} alt="error" onMouseEnter={handleHover}></img>
                    <div className="item-name">{item1.name}</div>
                    <div className="item-description">{item1.description}</div>
                </div>
            );
        });
    };
    const renderVideoRight = () => {
        return listTrailersRight.map((item2, index) => {
            return (
                <div key={index}>
                    notification: {item2.notification}
                </div>
            )
        })
    }    // Tabs: 
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    //
    // hover
    const handleHover = (e) => {
        console.log('hover', e.target.getAttribute('src'))
        if (e.target.getAttribute('src')) setHoverdImage(e.target.getAttribute('src'))
    }
    return (
        <div id="Trailers">
            <div className="Title">
                <div className="Title-name">Latest Trailers</div>
                <div className="Wrapper">
                    <div className={toggleState === 1 ? "Title-content Active-tabs" : "Title-content"} onClick={() => toggleTab(1)}>Popular</div>
                    <div className={toggleState === 2 ? "Title-content Active-tabs" : "Title-content"} onClick={() => toggleTab(2)}>In Theaters</div>
                </div>
            </div>
            <div className="Content">
                <div className={toggleState === 1 ? "Active-content" : "Show-content"}>
                    <div className="Active-content-data">{renderVideoLeft()}</div>
                    <div className="Active-content-hover">{hoverdImage && <img src={hoverdImage} />}</div>
                </div>
                <div className={toggleState === 2 ? "Active-content" : "Show-content"}>{renderVideoRight()}</div>
            </div>

            {/* {hoverdImage && <div><img src={hoverdImage} /></div>} */}

        </div>
    )
}
export default Trailers;