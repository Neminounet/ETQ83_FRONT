import { useContext, useEffect, useState } from "react";
import RdvForm from "./components/RdvForm";
import RdvHist from "./components/RdvHist";
import { getAllRDV, postRDV } from "../../../../apis/rdv";
import AuthContext from "../../../../context/AuthContext";
import styles from "./RendezVous.module.css"
import { NavLink } from "react-router-dom";


function RendezVous() {

    const { user } = useContext(AuthContext);

    const date = new Date()
    
    const today = `${date.getDate()< 10 ? "0"+date.getDate(): date.getDate()}-${date.getMonth() < 9 ? "0"+(date.getMonth()+1) :date.getMonth()+1}-${date.getFullYear()}`
  
    const [ rdvList, setRDVList ] = useState([])

    useEffect(()=> {
        async function setGetRDV() {
            const body = await getAllRDV();
            if(body) {
                setRDVList(body);
            } else {
                setRDVList([])
            }
        }
        setGetRDV();
    }, [])

    // console.log(rdvList);
    return (
        <div className={styles.rdvContainer}>
            <h2>Rendez-Vous</h2>
            <div className={styles.rdvContent}>
                <div className={styles.rdvBox}>
                    <h3>Rendez-vous à venir</h3>
                    {!user.is_superuser ? (
                         rdvList.length > 0 ? (rdvList
                            .filter(rdv => rdv.availability.date >= today)
                            .filter(rdv => rdv.user.id === user.id)
                            .map( rdv=> 
                                <NavLink key={rdv.id} to={`../rendezvous/${rdv.id}`}>
                                <button  className="m-10" disabled={rdv.availability.date > today && !user.is_superuser}>Niveau : {rdv.degree} le {rdv.availability.date} à {rdv.availability.heure} { user.is_superuser ? rdv.user.first_name : ""} { user.is_superuser ? rdv.user.last_name : ""}
                                </button>
                                </NavLink>
                            )) : <p>Pas de rendez-vous de plannifié</p>
                    ) : (
                         rdvList.length > 0 ? (rdvList
                            .filter(rdv => rdv.availability.date >= today)
                            .map( rdv=> 
                                <NavLink key={rdv.id} to={`../rendezvous/${rdv.id}`}>
                                <button  className="m-10" disabled={rdv.availability.date > today && !user.is_superuser}>Niveau : {rdv.degree} le {rdv.availability.date} à {rdv.availability.heure} { user.is_superuser ? rdv.user.first_name : ""} { user.is_superuser ? rdv.user.last_name : ""}
                                </button>
                                </NavLink>
                            )) : <p>Pas de rendez-vous de plannifié</p>
                    )}
                </div>
                { !user.is_superuser && (
                    <div className={styles.rdvBox}>
                        <h3>Prendre Rendez-vous</h3>
                        <RdvForm postRDV={postRDV} getAllRDV={getAllRDV} setRDVList={setRDVList} today={today}/>
                    </div>
                ) }
                <div className={styles.rdvBox}> 
                    <h3>Historique</h3>
                    <RdvHist rdvList={rdvList} today={today} user={user}/>
                </div>          
            </div>
        </div>
    );
}

export default RendezVous;