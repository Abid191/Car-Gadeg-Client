import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

        const {googleSignIn} = useContext(AuthContext)
        const handleGoogleSignIn =() =>{
            googleSignIn()
            .then(result=>{
                console.log(result.user)
                alert('LogIn successfully')
                navigate(from, { replace: true });
            })
            .catch(err=>console.log(err))
        }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center ">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline text-2xl">G</button>
            </div>
        </div>
    );
};

export default SocialLogin;