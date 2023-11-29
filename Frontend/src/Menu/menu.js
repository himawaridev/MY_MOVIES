import { useEffect, useState } from "react";
import "./menu.css";
import "./menu_responsive.css";
import axios from "axios";
import logo from "../SVG/logo.svg";
import plus from "../SVG/plus.svg";
import search from "../SVG/search.svg";
import translate from "../SVG/translate.svg";


function Menu() {
    useEffect(() => {
        axios.get("http://localhost:5000/menu")
            .then((response) => {
                console.log("response", response);
            })
            .catch((err) => console.log("error", err));
    });
    // html của phần Menu - Box-left 
    const menuItemLeft = [
        { label: 'Movies', state: 'isShownDrop1', clickHandler: 'handleClickOption1' },
        { label: 'TV Shows', state: 'isShownDrop2', clickHandler: 'handleClickOption2' },
        { label: 'People', state: 'isShownDrop3', clickHandler: 'handleClickOption3' },
        { label: 'More', state: 'isShownDrop4', clickHandler: 'handleClickOption4' },
    ];

    const [isShownDrop1, setShownDrop1] = useState(false);
    const [isShownDrop2, setShownDrop2] = useState(false);
    const [isShownDrop3, setShownDrop3] = useState(false);
    const [isShownDrop4, setShownDrop4] = useState(false);
    const [isShownDrop5, setShownDrop5] = useState(false);
    const [isShownDrop6, setShownDrop6] = useState(false);
    const [isShownDrop7, setShownDrop7] = useState(false);

    const handleClick = (index) => {
        const stateName = `isShownDrop${index + 1}`;
        const setState = `setShownDrop${index + 1}`;
        const currentState = eval(stateName); // eslint-disable-line no-eval
        eval(`${setState}(!${currentState})`); // eslint-disable-line no-eval
    };
    //
    const menuTteamRight = [
        { label: 'More1', state: 'isShownDrop5', clickHandler: 'handleClickOption5' },
        { label: 'More2', state: 'isShownDrop6', clickHandler: 'handleClickOption6' },
        { label: 'More3', state: 'isShownDrop7', clickHandler: 'handleClickOption7' },
    ];






    return (
        <div className="Menu">
            <div className="Box-left">
                <div className="Box-menu-logo">
                    <img className="Box-menu-logo-content" src={logo} alt="Logo error"></img>
                </div>
                {menuItemLeft.map((item, index) => (
                    <div className="Box-menu" key={index}>
                        <div className="dropbtn" onClick={() => handleClick(index)}>
                            {item.label}
                        </div>
                        {eval(`isShownDrop${index + 1}`) && ( // eslint-disable-line no-eval
                            <div className="Box-drop" id="myDropdown">
                                <div className="Drop-content">Option z</div>
                                <div className="Drop-content">Option z</div>
                                <div className="Drop-content">Option z</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="Box_right">

            </div>
            <div className="Box-right">
                <div className="Box-menu-logo">
                    <img className="Box-menu-logo-content" src={plus} alt="Logo error"></img>
                </div>
                <div className="Box-menu-logo">
                    <img className="Box-menu-logo-content" src={translate} alt="Logo error"></img>
                </div>
                <div className="Box-menu">Login</div>
                <div className="Box-menu">Join G.R.E.S</div>
                <div className="Box-menu-logo">
                    <img className="Box-menu-logo-content" src={search} alt="Logo error"></img>
                </div>
            </div>
        </div>
    );
}
export default Menu;
