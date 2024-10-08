import React, { useContext } from 'react';
import login from '../../../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../../Provider/AuthProvider';


const Login = () => {

    const {signIn,user} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                alert('Login SuccessFully')
                navigate(from, { replace: true });
                const user = result.user
                console.log(user)
                
            })
            .catch(err => console.log(err))
        }

        // Login Page Start

        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-12 md:w-1/2">
                        <img src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl font-bold text-center mt-10">Login</h1>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        name="email"
                                        type="text"
                                        placeholder="email"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                    />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        className="btn btn-primary"
                                        type="submit"
                                        value="Login"
                                    />
                                </div>
                            </form>
                            <p className="my-4 text-center">
                                New to Cars Doctor?{" "}
                                <Link
                                    to="/register"
                                    className="link-hover text-orange-600 font-semibold"
                                >
                                    Sign up
                                </Link>
                            </p>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default Login;