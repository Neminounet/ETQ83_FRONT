import styles from "./Identifier.module.css";

function Identifier({ user }) {
    return (
        <div className={styles.identifierContent}>
            <div className="flex-fill">
                <p> Utilisateur : { user.first_name } {user.last_name}</p>
                { user.is_superuser ? (
                    <p>Rôle : <i className="fa-solid fa-crown"></i> Administrateur</p>
                ) : (
                    <p>Rôle : <i className="fa-solid fa-graduation-cap"></i> Etudiant</p>
                )}
                { user.is_premium ? (
                    <p>Statut : Premium </p>
                ) : (
                    <p>Statut : Classique </p>
                )}
                <p>email : { user.email }</p>
            </div>
            <div className={styles.identifierImage}>
                <img src={user.profile_image} alt="avatar" />
            </div>
        </div>
    );
}

export default Identifier;