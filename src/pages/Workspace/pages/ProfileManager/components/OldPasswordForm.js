import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "../../../../../context/AuthContext";
import { checkUser } from "../../../../../apis/user";

function OldPasswordForm({ setChecked }){

    const {user} = useContext(AuthContext)

    const checkSchema = yup.object({
        oldPassword: yup
            .string()
            .required("Le mot de passe est obligatoire")
    })

    const { handleSubmit, register, setError, clearErrors, reset, formState: { errors, isSubmitting} } = useForm({
        resolver: yupResolver(checkSchema),
    });

    async function submit(values) {
       const submitValues = {
        email: user.email,
        password: values.oldPassword
       }
        try {
            clearErrors();
            const response = await checkUser(submitValues)
            reset();
            setChecked(response);
        } catch(e) {
            console.log(e);
            setError("generic", {type:"generic", message: e});
        }
    }

    return (
        <form onSubmit={ handleSubmit(submit) }>
            <div>
                <label htmlFor="oldPassword">Password actuel</label>
                <input type="password" name="oldPassword" {...register("oldPassword")}/>
                {errors?.oldPassword && <p className="form-error">{errors.oldPassword.message}</p>}
            </div>
            {errors.generic && (
                <div>
                    <p className="form-error">
                        {errors.generic.message.toString()}
                    </p>
                </div>
            )}
            <div>
                <button disabled={isSubmitting}>Envoyer Password actuel</button>
            </div>
        </form>
    );
}

export default OldPasswordForm;