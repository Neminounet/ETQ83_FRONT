import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function FirstNameForm({ user , update}) {

    const validationSchema = yup.object({
        first_name: yup
            .string()
            .required("Veuillez renseigner votre prénom.")
            .min(2, "Votre prénom doit comporter un minimum de deux caractères."),
    })

    const initialValue = {
        first_name: user.first_name
    }

    const { handleSubmit, register, setError, clearErrors, formState: { errors, isSubmitting} } = useForm({
        defaultValues: initialValue,
        resolver: yupResolver(validationSchema),
    });

    async function submit(values) {
        console.log(values)
        try {
            clearErrors();
            await update(values);
        } catch(e) {
            setError("generic", {type:"generic", message: e})
        }
    }

    return (
        <form onSubmit={ handleSubmit(submit) }>
            <div>
                <label htmlFor="first_name">Prénom</label>
                <input type="text" name="first_name" id="first_name" {...register("first_name")}/>
                {errors?.first_name && <p className="form-error">{errors.first_name.message}</p>}
            </div>
            {errors.generic && (
                <div>
                    <p className="form-error">
                        {errors.generic.message}
                    </p>
                </div>
            )}
            <div>
                <button disabled={isSubmitting}>Modifier Prénom</button>
            </div>
        </form>
    );
}

export default FirstNameForm;