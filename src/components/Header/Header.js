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
                <NavLink to="/" title="Revenir vers page d'accueil">
                    <i className={`fa-solid fa-graduation-cap ${styles.logoCap}`}></i>  
                </NavLink>
                <NavLink to="/">
                    <h1>En Toute Quiétude 83</h1>
                </NavLink>
            </div>
            <nav className={styles.nav}>
                {user ? (
                    <div>
                        { user.is_superuser ? (<NavLink to="https://neminounet.pythonanywhere.com/docs/" target="_blank" title="Accéder à la documentation de l'API"><button>API</button></NavLink>) : ""}
                        { user.is_superuser ? (<NavLink to="https://neminounet.pythonanywhere.com/admin/" target="_blank" title="Accéder à l'interface administration"><button>Administration</button></NavLink>) : ""}
                        <NavLink to="/workspace" title="Accéder à l'espace de travail"><button>Worskspace</button></NavLink>
                        <NavLink onClick={() => logout()} title="Se déconnecter"><button>Déconnexion</button></NavLink>
                    </div>
                ) : (
                    <div>
                        <NavLink to="connexion" title="Se connecter"><button>Connexion</button></NavLink>
                        <NavLink to="inscription" title="S'inscrire"><button>Inscription</button></NavLink>
                    </div>
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