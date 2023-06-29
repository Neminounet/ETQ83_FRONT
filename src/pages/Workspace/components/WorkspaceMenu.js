import { NavLink } from "react-router-dom";
import styles from "./WorkspaceMenu.module.css"

function WorkspaceMenu({ user }) {
    return (
        <aside className="card">
            <h4 className="ta-center mb-15">Menu</h4>
            <div className={`d-flex flex-column ${styles.buttonContainer}`}>
                <button className="mb-15"><NavLink to="profile" className="colorWhite">Profil</NavLink></button>
                { user.is_superuser ? (
                    <button className="mb-15"><NavLink to="availability" className="colorWhite">Disponibilités</NavLink></button>
                ) : "" }
                 { user.is_superuser ? (
                    <button className="mb-15"><NavLink to="usersmanager" className="colorWhite">Utilisateurs</NavLink></button>
                ) : "" }
                <button className="mb-15"><NavLink to="rendezvous" className="colorWhite">Rendez-vous</NavLink></button>
            </div>
        </aside>
    );
}

export default WorkspaceMenu;