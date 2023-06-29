import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import Chat from "./components/Chat";
import styles from "./RendezVousDetail.module.css";
import { deleteAvailability } from "../../../../apis/availability";
import { useContext } from "react";
import AuthContext from "../../../../context/AuthContext";

function RendezVousDetail() {

    const { user } = useContext(AuthContext)

    const rdv = useLoaderData();

    const navigate = useNavigate()
    async function handleClickDeleteRDV(id){
        await deleteAvailability(id)
        navigate("../rendezvous")
    }

    return (
        
        <div className={styles.componentContainer}>
            <h1>Rendez-Vous</h1>
            <div className={styles.rdvDetailContainer}>
                <div className="d-flex flex-column">
                    <NavLink className="mb-20" to="../rendezvous">
                        <button>
                        <i className="fa-solid fa-arrow-left"></i>
                        </button>
                    </NavLink>
                    <div className={styles.rdvInfo}>
                        <h3>Détail du Rendez-vous</h3>
                        <h5>RDV du : {rdv.availability.date} à {rdv.availability.heure}</h5>
                        <div className="d-flex flex-column ai-center">
                            <p className="mt-20">Etudiant : {rdv.user.first_name} {rdv.user.last_name}</p>
                            <p className="mt-20">Niveau scolaire : {rdv.degree}</p>
                            { user.is_superuser && <button className="mt-20 delete" onClick={()=> handleClickDeleteRDV(rdv.availability.id)}>Supprimer RDV</button>}
                        </div>
                    </div>
                </div>
                <div>
                    <Chat rdv={rdv}/>
                </div>
            </div>
        </div>
    );
}

export default RendezVousDetail;