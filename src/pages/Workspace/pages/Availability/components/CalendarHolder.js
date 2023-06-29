import Calendar from "react-calendar";
import "./Calendar.css";


function CalendarHolder({ date, setDate }) {
   
    return (
        <div>
            <Calendar onChange={ setDate } value={ date }/>
        </div>    
    );
}

export default CalendarHolder;