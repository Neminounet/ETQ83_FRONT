import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../../context/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { getMessagesFromRDV, postMessage, deleteMessage } from "../../../../../apis/message";
import styles from "./Chat.module.css";


function Chat({ rdv }) {

    const { user } = useContext(AuthContext)

    const [ messages, setMessages ] = useState([]);

    const now = new Date()

    function displayDate(date){
        const newDate = new Date(date)
        const displayDate = `${newDate.getDate()< 10 ? "0"+newDate.getDate(): newDate.getDate()}-${newDate.getMonth() < 9 ? "0"+(newDate.getMonth()+1) :newDate.getMonth()+1}-${newDate.getFullYear()} à ${newDate.getHours() < 10 ? "0"+newDate.getHours() : newDate.getHours()}:${newDate.getMinutes() < 10 ? "0"+newDate.getMinutes(): newDate.getMinutes()}:${newDate.getSeconds() < 10 ? "0"+newDate.getSeconds(): newDate.getSeconds()}`;
        return displayDate;
    }

    function sendDate(date) {
        const sendDate = `${date.getFullYear()}-${date.getMonth() < 9 ? "0"+(date.getMonth()+1) :date.getMonth()+1}-${date.getDate()< 10 ? "0"+date.getDate(): date.getDate()}T${date.getHours() < 10 ? "0"+date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0"+date.getMinutes(): date.getMinutes()}:${date.getSeconds() < 10 ? "0"+date.getSeconds(): date.getSeconds()}`;
        return sendDate;
    }

    function nowDateFormat(date) {
        const nowDate = `${date.getDate()< 10 ? "0"+date.getDate(): date.getDate()}-${date.getMonth() < 9 ? "0"+(date.getMonth()+1) :date.getMonth()+1}-${date.getFullYear()}`
        return nowDate
    }

    
    // console.log(sendDate(now));

    useEffect(()=> {
        getMessagesFromRDV(rdv.id)
        .then(mes => setMessages(mes))
    },[rdv])

    
    const validationSchema = yup.object({
        content: yup
            .string()
            .required("Vous devez écrire quelque-chose ! :).")
            .min(1, "Votre message doit contenir un minimum de un caractère.")
            .max(1000, "Votre message ne peut dépasser les 1000 caractères."),
    })
    
    const initialValues = {
        content: "",
    }
    
    const { handleSubmit, register, reset, clearErrors, formState: { errors, isSubmitting} } = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(validationSchema),
    });
    
    async function submit(values) {
        const submitValues = {
            rdv: rdv.id, 
            sender: user.id,
            content: values.content,
            date_time: sendDate(now)
        }
        clearErrors();
       await postMessage(submitValues);
        reset(initialValues);
        const msg = await getMessagesFromRDV(rdv.id)
        setMessages(msg); 
    }

    async function handleDeleteMessage(id) {
        await deleteMessage(id)
        const msg = await getMessagesFromRDV(rdv.id)
        setMessages(msg);
    }

    function handleKeyDown(e) {
        if(e.key === "Enter" && e.shiftKey === false && e.target.value.trim()!=="") {
            e.preventDefault();
            handleSubmit(submit)();
        }
    }

    return (
       <div className="d-flex flex-column ai-center">
            <h3 className="mb-20">Messagerie</h3>
            <div className={styles.messageContainer}>
                {messages.length > 0 ? (
                    messages.map((msg, index) => {
                        return ( 
                            <div key={msg.id}>
                                <div className={styles.messageHeader}>
                                    <p><small>{msg.sender.first_name} {msg.sender.last_name}</small></p>
                                    <p><small>{displayDate(msg.date_time)}</small></p>
                                </div>
                                <div className={styles.messageContent}>
                                    <p>{msg.content}</p>
                                    {user.is_superuser && <button onClick={()=> handleDeleteMessage(msg.id)}>x</button>}
                                </div>
                            </div>
                            
                        )
                    })
                ): (
                    <h5>Pas de message</h5>
                )}
            </div>
            {rdv.availability.date >= nowDateFormat(now) && 
                <form onSubmit={ handleSubmit(submit) }>
                    <div>
                        <label htmlFor="content">Message</label>
                        <textarea name="content" id="" cols="40" rows="5" {...register("content")} onKeyDown={ handleKeyDown }></textarea>
                        {errors?.content && <p className="form-error">{errors.content.message}</p>}
                    </div>
                    <div>
                        <button disabled={isSubmitting}>Envoyer message</button>
                    </div>
                </form>
            }
       </div> 
    );
}

export default Chat;