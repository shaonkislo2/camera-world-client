import { Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Link ,useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState([]);
    const {user, loginUser, signInWithGoogle,  isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, history);
    }
    return (
        <div>
            <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
              <input name="email"  onBlur= {handleOnChange}  type="email" placeholder="Your Email  " />
              <br />
              <br />
              <input name="password"  onBlur= {handleOnChange}   type="password" placeholder="Your Password" />
              <br />
              <br />
              <button className="btn btn-warning" type="submit">Login </button>

              <p>New User ? <Link style={{textDecoration: "none"}} to="register">Please Register</Link> </p>

          </form>

          <p>--------------------------------</p>

          <button onClick={handleGoogleSignIn} className="btn btn-warning" type="submit">Google Sign In </button>

          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">User Login Successfully !</Alert> }
          {authError && <Alert severity="error">{authError}</Alert>}

         
        </div>
    );
};

export default Login;