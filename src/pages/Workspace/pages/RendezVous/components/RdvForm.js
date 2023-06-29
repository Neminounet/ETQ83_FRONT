import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../../context/AuthContext";
import { getAvailabilitiesUser } from "../../../../../apis/availability";


function RdvForm({ postRDV, getAllRDV, setRDVList, today }) {
    const classes = ["CP", "CE1", "CE2", "CM1", "CM2", "6E", "5E", "4E", "3E"]
    const { user } = useContext(AuthContext);
    const [ availabilities, setAvailabilities ] = useState([]); 
    const [selectedDate, setSelectedDate] = useState(""); 

    const validationSchema = yup.object({
        degree: yup
            .string()
            .required("vous devez choisir une classe"),
        date: yup
            .string()
            .required("Vous devez choisir une date"),
        heure: yup
            .string()
            .required("Vous devez choisir une heure"),
    })

    const initialValues = {
        degree: "",
        date: "",
        heure: "",
    }

    const { handleSubmit, register, reset, formState: { isSubmitting} } = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(validationSchema),
    });

    
    // async function getSetAvail() {
    //     const body = await getAvailabilitiesUser();
    //     const availsByDate = body.reduce((acc, curr) => {
    //         if (!acc[curr.date]) {
    //             acc[curr.date] = [];
    //         }
    //         acc[curr.date].push({id: curr.id, heure: curr.heure, is_taken: curr.is_taken});

    //         return acc;
    //     }, {});
    //     setAvailabilities(availsByDate);
    // }

    async function getSetAvail() {
        const body = await getAvailabilitiesUser();
        if (body) {
            const availsByDate = body.reduce((acc, curr) => {
                if (!acc[curr.date]) {
                    acc[curr.date] = [];
                }
                acc[curr.date].push({id: curr.id, heure: curr.heure, is_taken: curr.is_taken});
    
                return acc;
            }, {});
            setAvailabilities(availsByDate);
        } else {
            setAvailabilities([]);
        }
    }

    useEffect(()=> {
        getSetAvail();
    }, [])

    console.log(availabilities);

    async function submit(values) {
        const submitValues = {
            user: user.id,
            degree: values.degree,
            availability: values.heure,
        };
        await postRDV(submitValues);
        reset(initialValues);
        await getSetAvail();
        const allRDV = await getAllRDV();
        setRDVList(allRDV);
    }

    // console.log(availabilities)

    return (
        <div>
            <form onSubmit={ handleSubmit(submit)}>
                <div className="d-flex flex-column">
                    <label htmlFor="degree">Selectionner classe</label>
                    <select name="degree" { ...register("degree") }>
                        <option value="" disabled >Choisissez une classe</option>
                        {classes.map((classe, index)=> <option key={index} value={classe}>{classe}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Selectionner date</label>
                    <select name="date" { ...register("date") } onChange={e => setSelectedDate(e.target.value)}>
                        <option value="" disabled >Choisissez une date</option>
                        {Object.keys(availabilities).filter(date => date >= today).map((date, index) => <option key={index} value={date}>{date}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="heure">Selectionner heure</label>
                    <select name="heure" { ...register("heure") }>
                        <option value="" disabled >Choisissez une heure</option>
                        {availabilities[selectedDate]?.filter(a=> a.is_taken !== true ).map((avail, index) => <option key={index} value={avail.id}>{avail.heure}</option>)}
                    </select>
                </div>
                <div>
                    <button disabled={isSubmitting}>Prendre RDV</button>
                </div>
            </form>
        </div>
    );
}
export default RdvForm;
           
