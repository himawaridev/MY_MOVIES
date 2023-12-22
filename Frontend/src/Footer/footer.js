import "./footer.css";
import axios from "axios";
import logo from "../SVG/logo.svg";

function Footer() {
    return (
        <div id="Footer">
            <div className="Left">
                <img className="Image" src={logo} alt="error"></img>
                <span className="Left-name">Join the community</span>
            </div>
            <div className="Right">
                <div className="Right-box">
                    <span>Contat:</span>
                    <span>Phone:</span>
                    <span>Email:</span>
                    <span>Website:</span>
                </div>
                <div className="Right-box">
                    <span>Kim Anh</span>
                    <span>091.7676</span>
                    <span>zzz@gmail.com</span>
                    <span>himawari.vn</span>
                </div>
                <div className="Right-box">
                    <span>Himawari</span>
                    <span>091.767</span>
                    <span>sleppi@edu.vn</span>
                    <span>himawari.vn</span>
                </div>
                <div className="Right-box">
                    <span>Dung Hoang</span>
                    <span>091.767</span>
                    <span>hima@gmail.com</span>
                    <span>himawari.vn</span>
                </div>
                <div className="Right-box">
                    <span>Hoang Duc</span>
                    <span>091.767</span>
                    <span>kimanh@gmail.com</span>
                    <span>himawari.vn</span>
                </div>
            </div>
        </div>
    )
}
export default Footer;