import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function LastNameForm({ user , update}) {

    const validationSchema = yup.object({
        last_name: yup
            .string()
            .required("Veuillez renseigner votre nom.")
            .min(2, "Votre prénom doit comporter un minimum de deux caractères."),
    })

    const initialValue = {
        last_name: user.last_name
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
            console.log(e);
            setError("generic", {type:"generic", message: e});
        }
    }

    return (
        <form onSubmit={ handleSubmit(submit) }>
            <div>
                <label htmlFor="last_name">Nom</label>
                <input type="text" name="last_name" {...register("last_name")}/>
                {errors?.last_name && <p className="form-error">{errors.last_name.message}</p>}
            </div>
            {errors.generic && (
                <div>
                    <p className="form-error">
                        {errors.generic.message.toString()}
                    </p>
                </div>
            )}
            <div>
                <button disabled={isSubmitting}>Modifier Nom</button>
            </div>
        </form>
    );
}

export default LastNameForm;