import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { createUser } from "../../apis/user";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import styles from "./Inscription.module.css"

function Inscription(){

    const { user } = useContext(AuthContext);
    
    const navigate = useNavigate()

    const validationSchema = yup.object({
        last_name: yup
            .string()
            .required("Veuillez renseigner votre nom.")
            .min(2, "Votre nom doit comporter un minimum de deux caractères."),
        first_name: yup
            .string()
            .required("Veuillez renseigner votre prénom.")
            .min(2, "Votre prénom doit comporter un minimum de deux caractères."),
        email: yup
            .string()
            .required("Veuillez renseigner une adresse email.")
            .email("L'adresse email doit être valide."),
        password: yup
            .string()
            .required("Le mot de passe est obligatoire")
            .min(6, "Le mot de passe doit comporter un minimum de six caractères.")
            .matches(/^(?=.*[A-Z])(?=.*\d).+$/, "Le mot de passe doit comporter au moins une Majuscule et un chiffre."),
        passwordVal: yup
            .string()
            .required("Le mot de passe est obligatoire.")
            .oneOf([yup.ref("password"), ""], "Les mots de passes ne sont pas identiques")
    })

    const initialValues = {
        last_name: "",
        first_name: "",
        email: "",
        password: "",
        passwordVal: "",
    }

    const { handleSubmit, register, setError, clearErrors, formState: { errors, isSubmitting} } = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(validationSchema),
    });

    async function submit(values) {
        const { passwordVal, ...restValues} = values
        try {
            clearErrors();
            await createUser(restValues);
            navigate("/connexion");
        } catch(e) {
            console.log(e)
            setError("generic", {type:"generic", message: e.email})
        }
    }

    return (
        <>
            {user ? (<Navigate to="/workspace"/>) : (
                <div className="pagesContainer">
                    <div className="pagesContent">
                        <h2>Inscription</h2>
                        <form onSubmit={ handleSubmit(submit) }>
                            <div className={styles.formContent}>
                                <label htmlFor="last_name">Nom</label>
                                <input type="text" name="last_name" {...register("last_name")}/>
                                {errors?.last_name && <p className="form-error">{errors.last_name.message}</p>}
                            </div>
                            <div className={styles.formContent}>
                                <label htmlFor="first_name">Prénom</label>
                                <input type="text" name="first_name" {...register("first_name")}/>
                                {errors?.first_name && <p className="form-error">{errors.first_name.message}</p>}
                            </div>
                            <div className={styles.formContent}>
                                <label htmlFor="email">Adresse email</label>
                                <input type="text" name="email" {...register("email")}/>
                                {errors?.email && <p className="form-error">{errors.email.message}</p>}
                            </div>
                            <div className={styles.formContent}>
                                <label htmlFor="password">Mot de passe</label>
                                <input type="password" name="password" {...register("password")}/>
                                {errors?.password && <p className="form-error">{errors.password.message}</p>}
                            </div>
                            <div className={styles.formContent}>
                                <label htmlFor="passwordVal">Confirmer Mot de passe</label>
                                <input type="password" name="passwordVal" {...register("passwordVal")}/>
                                {errors?.passwordVal && <p className="form-error">{errors.passwordVal.message}</p>}
                            </div>
                            {errors.generic && (
                                <div>
                                    <p className="form-error">
                                        {errors.generic.message.toString()}
                                    </p>
                                </div>
                            )}
                            <div>
                                <button disabled={isSubmitting} className={styles.formButton}>S'inscrire</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Inscription;