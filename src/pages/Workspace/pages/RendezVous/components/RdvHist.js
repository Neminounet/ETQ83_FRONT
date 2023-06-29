import { useState } from "react";
import { NavLink } from "react-router-dom";

function RdvHist({ rdvList, today, user }) {
    const  [selectedYear, setSelectedYear ] = useState("");
    const [ selectedMonth, setSelectedMonth ] = useState("");

    const years = ["2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"]
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

    // console.log(rdvList);
    return (
        
        <div className="d-flex flex-column">
            <form>
                <div>
                    <label htmlFor="year">Selectionner l'année</label>
                    <select name="year" onChange={e => setSelectedYear(e.target.value)}>
                    <option value="" disabled >Choisissez une année</option>
                    {years.map((year, index) => <option key={index}  value={year}>{year}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="month">Selectionner le mois</label>
                    <select name="month" onChange={e => setSelectedMonth(e.target.value)}>
                    <option value="" disabled >Choisissez un mois</option>
                    {months.map((month, index) => <option key={index}  value={month}>{month}</option>)}
                    </select>
                </div>

            </form>
            {user.is_superuser ? (
                 rdvList.filter(rdv => rdv.availability.date.includes(selectedYear)).filter(rdv => rdv.availability.date.includes(`-${selectedMonth}-`)).filter(rdv => rdv.availability.date < today ).map(rdv => <NavLink key={rdv.id} to={`../rendezvous/${rdv.id}`}><button key={rdv.id} className="rdv mb-20">
                Niveau : {rdv.degree} le {rdv.availability.date} à {rdv.availability.heure} { rdv.user.first_name } { rdv.user.last_name }
            </button></NavLink>) 
            ) : (
                rdvList.filter(rdv => rdv.availability.date.includes(selectedYear)).filter(rdv => rdv.availability.date.includes(`-${selectedMonth}-`)).filter(rdv => rdv.availability.date < today ).filter(rdv => rdv.user.id === user.id).map(rdv => <NavLink key={rdv.id} to={`../rendezvous/${rdv.id}`}><button key={rdv.id} className="rdv mb-20">
                    Niveau : {rdv.degree} le {rdv.availability.date} à {rdv.availability.heure} { rdv.user.first_name } { rdv.user.last_name }
                </button></NavLink>) 
            )}
        </div>
    );
}

export default RdvHist;