import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';  // Change this import
import AuthContext from './auth-context';
import classes from './AuthForm.module.css';
import { TextField } from '@mui/material';

const SignUp = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmpasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();  // Change this line
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

    let url;
    setIsLoading(true);
    if (isLogin)
    {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAoPjvxfipiUuRYpafgtPIncYCdPp6UGB4';
    }
    else
    {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAoPjvxfipiUuRYpafgtPIncYCdPp6UGB4';
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers:
      {
        'Content-Type': 'application/json'
      },
    })
    
    .then((res) => {
      setIsLoading(false);
      if (res.ok)
      {
        return res.json();
      }
      else
      {
        return res.json().then((data) => {
          console.log(data)
          let errorMessage = 'Authentication Failed!';
          if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
          }
          throw new Error(errorMessage)
        });
      }
    })
    .then((data) => {
      authCtx.login(data.idToken);
      //navigate('/home');  // Change this line
      alert("login successfull")
      console.log(data)
    })
    .catch((err) => {
      alert(err.message);
    });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
            <TextField type='email' id='email' required ref={emailInputRef} fullWidth label="Email" variant="outlined" />
        </div>
        <div className={classes.control}>
            <TextField type='password' id='password' required ref={passwordInputRef} fullWidth label="Password" variant="outlined" />
        </div>
        <div className={classes.control}>
            <TextField type='password' id='confirm_password' required ref={confirmpasswordInputRef} fullWidth label="Confirm Password" variant="outlined" />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending Request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;