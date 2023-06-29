import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";


function PasswordForm({ updatePassword, checked, setChecked}) {

    const validationSchema = yup.object({
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

  

    const { handleSubmit, register, setError, clearErrors, formState: { errors, isSubmitting} } = useForm({
        resolver: yupResolver(validationSchema),
    });

    async function submit(values) {
        const { password } = values
        console.log({password})
        try {
            clearErrors();
            await updatePassword({ password});
            setChecked(false);
        } catch(e) {
            console.log(e);
            setError("generic", {type:"generic", message: e});
        }
    }

    return (
        <form onSubmit={ handleSubmit(submit) }>
            <div>
                <label htmlFor="password">Password</label>
                <input disabled={!checked } type="password" name="password" {...register("password")}/>
                {errors?.password && <p className="form-error">{errors.password.message}</p>}
            </div>
            <div>
                <label htmlFor="passwordVal">Confirmer Password</label>
                <input disabled={!checked} type="password" name="passwordVal" {...register("passwordVal")}/>
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
                <button disabled={isSubmitting}>Modifier Password</button>
            </div>
        </form>
    );
}

export default PasswordForm;