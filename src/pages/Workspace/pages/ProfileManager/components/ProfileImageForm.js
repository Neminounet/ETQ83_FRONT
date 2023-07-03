import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function ProfileImageForm({ user , updateImage}) {

    const validationSchema = yup.object({
        profile_image: yup
        .mixed()
        .required("Vous devez fournir un fichier")
        .test("fileName", "Le nom du fichier doit comporter au plus 100 caractères", (value) => {
            return value && value[0] && value[0].name.length <= 100;
        })
        .test("fileType", "Le fichier doit être une image", (value) => {
            return value && value[0] && ["image/jpeg", "image/png", "image/gif"].includes(value[0].type);
          }),
    })

    const { handleSubmit, register, setError, clearErrors, reset, formState: { errors, isSubmitting} } = useForm({
        resolver: yupResolver(validationSchema),
    });

    async function submit(values) {
        console.log(values)
        try {
            clearErrors();
            const formData = new FormData();
            formData.append('profile_image', values.profile_image[0]);
            await updateImage(formData);
            reset();
        } catch(e) {
            console.log(e);
            setError("generic", {type:"generic", message: e});
        }
    }

    return (
        <form onSubmit={ handleSubmit(submit) }>
            <div>
                <label htmlFor="profile_image">Image de Profil</label>
                <input type="file" name="profile_image" id="profile_image"{...register("profile_image")}/>
                {errors?.profile_image && <p className="form-error">{errors.profile_image.message}</p>}
            </div>
            {errors.generic && (
                <div>
                    <p className="form-error">
                        {errors.generic.message.toString()}
                    </p>
                </div>
            )}
            <div>
                <button disabled={isSubmitting}>Modifier image</button>
            </div>
        </form>
    );
}

export default ProfileImageForm;