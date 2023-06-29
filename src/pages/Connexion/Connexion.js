import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import styles from "./Connexion.module.css"

function Connexion() {

    const { login, user } = useContext(AuthContext);

    const validationSchema = yup.object({
        email: yup
            .string()
            .required("Veuillez renseigner une adresse email.")
            .email("L'adresse email doit être valide."),
        password: yup
            .string()
            .required("Le mot de passe est obligatoire")
    })

    const initialValues = {
        email: "",
        password: "",
    }

    const { handleSubmit, register, setError, clearErrors, formState: { errors, isSubmitting} } = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(validationSchema),
    });

    async function submit(values) {
        try {
            clearErrors();
            await login(values)
        } catch(e) {
            setError("generic", {type:"generic", message: e.non_field_errors[0]
        })
        }
    }

    return (
        <>
            { user ? (<Navigate to="/workspace"/> ): (
                <div className="pagesContainer">
                    <div className="pagesContent">
                        <h2>Connexion</h2>
                        <form onSubmit={ handleSubmit(submit) }>
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
                            {errors.generic && (
                                <div>
                                    <p className="form-error">{errors.generic.message.toString()}</p>
                                </div>
                            )}
                            <div>
                                <button disabled={isSubmitting} className={styles.formButton}>Se connecter</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Connexion;