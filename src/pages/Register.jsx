import { useForm } from "react-hook-form";

function Register() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        if (!data.email || !data.password || !data.confirmPassword) return;
        console.log(data);
    }

    return (
        <>
            <div>Register</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input
                    className="border-solid border-2"
                    {...register("email")}
                />
                <label>Password</label>
                <input
                    className="border-solid border-2"
                    type="password"
                    {...register("password")}
                />
                <label>Confirm password</label>
                <input
                    className="border-solid border-2"
                    type="password"
                    {...register("confirmPassword")}
                />
                <input type="submit" />
            </form>
        </>
    );
}

export default Register;
