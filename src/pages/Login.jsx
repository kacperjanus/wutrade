import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        if (!data.email || !data.password) return;
        console.log(data);
    }

    return (
        <>
            <div>Log in</div>
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
                <input type="submit" />
            </form>
        </>
    );
}

export default Login;
