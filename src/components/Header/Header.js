import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import HeaderXS from "./HeaderXS";

function Header(){
    const {user, logout } = useContext(AuthContext);

    const [display, setDisplay ] = useState(false)

    function handleClick() {
        setDisplay(!display)
    }
 
    return (
        <header className="p-20">
            <div className={styles.titleContainer}>
                <NavLink to="/">
                    <i className={`fa-solid fa-graduation-cap ${styles.logoCap}`}></i>  
                </NavLink>
                <NavLink to="/">
                    <h1>En Toute Quiétude 83</h1>
                </NavLink>
            </div>
            <nav className={styles.nav}>
                {user ? (
                    <ul>
                        { user.is_superuser ? (<NavLink to="http://localhost:8000/docs" target="_blank"><button>API</button></NavLink>) : ""}
                        { user.is_superuser ? (<NavLink to="http://localhost:8000/admin" target="_blank"><button>Administration</button></NavLink>) : ""}
                        <NavLink to="/workspace"><button>Worskspace</button></NavLink>
                        <NavLink onClick={() => logout()}><button>Déconnexion</button></NavLink>
                    </ul>
                ) : (
                    <ul>
                        <NavLink to="connexion"><button>Connexion</button></NavLink>
                        <NavLink to="inscription"><button>Inscription</button></NavLink>
                    </ul>
                )}
            </nav>
            <i className={`fa-solid fa-bars ${styles.xsButton}`} onClick={handleClick}></i>
            {display && (
                <>
                    <div className="calc" onClick={() => setDisplay(false)}></div>
                    <HeaderXS/>
                </>
            )}
            
        </header>
    );
}

export default Header;