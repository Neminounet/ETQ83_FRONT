import { useEffect, useState } from "react";
import CalendarHolder from "./components/CalendarHolder";
import AvailButton from "./components/AvailButton";
import styles from "./Availability.module.css"
import { getAvailabilitiesSuperUser, postAvailability, deleteAvailability } from "../../../../apis/availability";

function Availability() {
    
    const [ date, setDate ] = useState(new Date());

    const [ availabilities, setAvailabilities ] = useState([]);

    const heures = ["08:00:00", "09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00", "18:00:00", "19:00:00"]

    const displayDate = `${date.getDate()< 10 ? "0"+date.getDate(): date.getDate()}-${date.getMonth() < 9 ? "0"+(date.getMonth()+1) :date.getMonth()+1}-${date.getFullYear()}`

    const formatedDate = `${date.getFullYear()}-${date.getMonth() < 9 ? "0"+(date.getMonth()+1) :date.getMonth()+1}-${date.getDate()< 10 ? "0"+date.getDate(): date.getDate()}`

    
    useEffect(()=> {
        async function fetchAndSetAvailabilities() {
            const avails = await getAvailabilitiesSuperUser();
            if(avails) {
                setAvailabilities(avails);
            } else {
                setAvailabilities([])
            }
        } 
        fetchAndSetAvailabilities();
    }, []);

    async function handleClick(e) {
        const heure = e.target.value;
        const avails = await postAvailability(formatedDate, heure)
        setAvailabilities(avails)
    }
    
    async function handleDeleteClick(id) {
        const avails = await deleteAvailability(id)
        setAvailabilities(avails)
    }

    function getAvailability(heure){
        if (!availabilities) {
            return null;
        }
        // console.log(availabilities.find(avail => avail.date === displayDate && avail.heure === heure))
        return availabilities.find(avail => avail.date === displayDate && avail.heure === heure);
    }

    return (
        <div className={`${styles.availabilityContainer}`}>
            <h1>Disponibilités</h1>
            <div className={styles.availabilityContent}>
                <div className="d-flex flex-column ai-center">
                    <h2 className="mb-20">Calendrier</h2>
                    <div className="mt-20">
                        <CalendarHolder date={ date } setDate={ setDate }/>
                    </div>
                </div>
                <div className="d-flex flex-column ai-center">
                    <h2>Heures</h2>
                    <h3>
                        {displayDate}
                    </h3>
                    <div className="d-flex flex-column ai-center pb-20">
                        { heures.map((heure, index) => {
                            const avail = getAvailability(heure)
                            return (
                                <AvailButton key={index} avail={avail} index={index} heure={heure} handleClick={handleClick} handleDeleteClick={handleDeleteClick}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Availability;