import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css"

function Footer(){
    return (
        <footer className="p-20">
            <p>En toute Quiétude 83</p>
            <div className="colorWhite">
                <NavLink to="rgpd" className="colorWhite">Charte de confidentialité</NavLink>
                <a href="mailto:entoutequietude83@gmail.com" className="colorWhite"><i className="fa-solid fa-envelope colorWhite mr-10"></i>Me contacter</a>
            </div>
        </footer>
    );
}

export default Footer;