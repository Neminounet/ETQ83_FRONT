import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function PhoneForm({ user , update}) {

    const validationSchema = yup.object({
        telephone: yup
            .string()
            .required("Veuillez renseigner votre numéro de téléphone.")
            .length(10, "Votre Téléphone doit comporter dix caractères.")
            .matches(/^[0-9]+$/, "Votre numéro de téléphone ne doit contenir que des chiffres.")
        })

    const initialValue = {
        telephone: user.telephone
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
                <label htmlFor="telephone">Téléphone</label>
                <input type="text" name="telephone" id="telephone" {...register("telephone")}/>
                {errors?.telephone && <p className="form-error">{errors.telephone.message}</p>}
            </div>
            {errors.generic && (
                <div>
                    <p className="form-error">
                        {errors.generic.message.toString()}
                    </p>
                </div>
            )}
            <div>
                <button disabled={isSubmitting}>Modifier téléphone</button>
            </div>
        </form>
    );
}

export default PhoneForm;