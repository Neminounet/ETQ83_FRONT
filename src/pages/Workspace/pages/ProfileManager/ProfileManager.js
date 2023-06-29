import { useContext, useState } from "react";
import AuthContext from "../../../../context/AuthContext";
import FirstNameForm from "./components/FirstNameForm";
import LastNameForm from "./components/LastNameForm";
import ProfileImageForm from "./components/ProfileImageForm";
import PasswordForm from "./components/PasswordForm";
import PhoneForm from "./components/PhoneForm";
import OldPasswordForm from "./components/OldPasswordForm";
import { deleteUser } from "../../../../apis/user";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileManager.module.css"

function ProfileManager() {
    const navigate = useNavigate();

    const {user, update, updateImage, updatePassword, logout}  = useContext(AuthContext);
    
    const [ checked, setChecked ] = useState(false)

    async function handleDeleteClick() {
        const result = await deleteUser();
    
        if (result.success) {
            logout();
            navigate("../../inscription");
        } else {
            console.error("Could not delete user:", result.error || result.status);
        }
    }

    return (
        <>
            <h2>Gestion du profil</h2>
            <div className={styles.pmContent}>
                <div className={styles.pmForms}>
                    <h3>Modifier vos informations personnelles</h3>
                    <FirstNameForm user={user} update={update}/>
                    <LastNameForm user={user} update={update}/>
                    <PhoneForm user={user} update={update}/>
                    <ProfileImageForm user={user} updateImage={updateImage}/>
                </div>
                <div className={styles.pmForms}>
                    <h3>Modifier votre Mot de passe</h3>
                    <OldPasswordForm setChecked={setChecked}/>
                    <PasswordForm updatePassword={updatePassword} checked={checked} setChecked={setChecked}/>
                    <div className="d-flex flex-column ai-center">
                        <h3 className="mb-20">Supprimer compte</h3>
                        <button className="delete" onClick={ handleDeleteClick }>Supprimer Compte</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileManager;