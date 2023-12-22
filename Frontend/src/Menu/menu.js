import { useEffect, useState } from "react";
import "./menu.css";
import "./menu_responsive.css";
import axios from "axios";
import logo from "../SVG/logo.svg";
import plus from "../SVG/plus.svg";
import search from "../SVG/search.svg";
import translate from "../SVG/translate.svg";
import home from "../Home/home";
import { Link } from "react-router-dom";



function Menu(props) {
    useEffect(() => {
        axios.get("http://localhost:5000/menu")
            .then((response) => {
                console.log("response: ", response);
            })
            .catch((err) => console.log("error", err));
    });
    // html của phần Menu - Box-left 
    const menuItems = [
        { label: 'Movies', state: 'isShownDrop1', clickHandler: 'handleClickOption1' },
        { label: 'TV Shows', state: 'isShownDrop2', clickHandler: 'handleClickOption2' },
        { label: 'People', state: 'isShownDrop3', clickHandler: 'handleClickOption3' },
        { label: 'More', state: 'isShownDrop4', clickHandler: 'handleClickOption4' },
    ];
    const [isShownDrops, setShownDrops] = useState({
        isShownDrop1: false,
        isShownDrop2: false,
        isShownDrop3: false,
        isShownDrop4: false,
    });

    const handleClick = (index) => {
        const stateName = `isShownDrop${index + 1}`;
        setShownDrops((prev) => ({ ...prev, [stateName]: !prev[stateName] }));
    };
    return (
        <div className="Menu">
            <div className="Box-left">
                <div className="Box-menu-logo">
                    <img className="Box-menu-logo-content" src={logo} alt="Logo error"></img>
                </div>
                {menuItems.map(({ label }, index) => (
                    <div className="Box-menu" key={index}>
                        <div className="dropbtn" onClick={() => handleClick(index)}>
                            {label}
                        </div>
                        {isShownDrops[`isShownDrop${index + 1}`] && (
                            <div className="Box-drop" id="myDropdown">
                                <Link to="/" className="Drop-content">Option z</Link>
                                <Link to="blog" className="Drop-content">Option z</Link>
                                <Link to="login" className="Drop-content">Option z</Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="Box-right">
                <div className="Box-menu-logo">
                    <img className="Box-menu-logo-content" src={plus} alt="Logo error"></img>
                </div>
                <div className="Box-menu-logo">
                    <img className="Box-menu-logo-content" src={translate} alt="Logo error"></img>
                </div>
                <div className="Box-menu"><a href={home} alt="error">Login</a></div>
                <div className="Box-menu">Join G.R.E.S</div>
                <div className="Box-menu-logo">
                    <img className="Box-menu-logo-content" src={search} alt="Logo error"></img>
                </div>
            </div>
            {props.children}
        </div>
    );
}
export default Menu;
