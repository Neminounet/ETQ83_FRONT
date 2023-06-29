import { NavLink } from "react-router-dom";
import { getRDVFromAvailability } from "../../../../../apis/rdv";
import { useEffect, useState } from "react";

function AvailButton({ avail, index, heure, handleClick, handleDeleteClick}) {
    
   const [ rdvId, setRDVId] = useState(null)

   useEffect(() => {
    if (avail && avail.is_taken) {
        getRDVFromAvailability(avail.id)
        .then(rdv => {
            // console.log(rdv);
            setRDVId(rdv[0].id); // 
        })
    } 
   }, [avail]);

//    console.log(rdvId);
  
    
    return (
        <div className="d-flex" key={index}>
            <button 
                className={`p-5 m-5 ${avail ? (avail.is_taken ? "rdv" : "") : ""}`}
                value={heure} 
                onClick={ handleClick }
                disabled={ avail } 
                > { avail ? (avail.is_taken ? 
                <NavLink className="colorWhite" to={`../rendezvous/${rdvId}`}> {heure} Rendez-vous
                </NavLink> : `${heure} disponible`) :`${heure}`}
               
            </button>
            { (avail && !avail.is_taken) && (
                <button 
                    className="p-5 m-5 delete" 
                    onClick={() => handleDeleteClick(avail.id)}
                >
                Supprimer
                </button>
            )}
        </div>
    ); 
}

export default AvailButton;