import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Signup = () => {
    const {createUser} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(name, email, pass);

        createUser(email, pass)
        .then(res=>{
            toast.success("Successfully Registered")
            // navigate(`${location?.pathname} || '/'`);
            navigate('/')
            console.log(res.user);
        })
        .catch(err => console.log(err))

        
    }
    return (
        <div className="hero min-h-screen bg-background max-w-7xl mx-auto">
            <div className="hero-content flex-col lg:flex-row lg:w-2/3 mx-auto">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6">Log in quickly to buy the watches. Its so easy and secure.</p>
                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" name ='name' className="input input-bordered" required />
                        </div>
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
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    
                    <p className="text-center mb-4">Already have an account? <Link to='/login' className="text-primary">Log In now.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;