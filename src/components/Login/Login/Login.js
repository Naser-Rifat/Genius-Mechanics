import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { googleSignIn, setIsLoading, setUser } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'

    const handlegoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                setUser(result.user);
                history.push(redirect_url);

            })
            .finally(() => setIsLoading(false))

    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handlegoogleSignIn} className="btn btn-primary">Google Sign In</button>
        </div>
    );
};

export default Login;