import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import styles from "./HeaderXS.module.css";

function HeaderXS() {
    
    const {user, logout } = useContext(AuthContext)

    return (
        <nav className={styles.headerXS}> 
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
    );
}

export default HeaderXS;