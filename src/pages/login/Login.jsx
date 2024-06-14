import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const [error, setError] = useState('')
    const {login, googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(name, email, pass);

        login(email, pass)
        .then(res =>{
            console.log(res.user);
            navigate('/')
            toast.success("Logged in successfully");
        })
        .catch(err => setError(err))
    }

    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(res =>{
            console.log(res.user);
            toast.success("Successfully logged in");
            navigate('/')
        })
        .then(err => setError(err))
    }


    return (
        <div className="hero min-h-screen bg-background max-w-7xl mx-auto">
            <div className="hero-content flex-col lg:flex-row lg:w-2/3 mx-auto">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
                    <p className="py-6">Log in quickly to buy the watches. Its so easy and secure.</p>
                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-primary">Login</button>
                        </div>
                    </form>
                    {/* <p className="mx-8 text-red">{error?.message}</p> */}
                    <button onClick={handleGoogleLogin} className="btn btn-primary bg-primary mx-8">Google Signin</button>
                    <p className="text-center mb-4">Dont have a account? <Link to='/signup' className="text-primary">Create one now.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;