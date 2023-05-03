import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { signUp } from "../../store/session";
import isEmail from "validator/lib/isEmail";
const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (username.length < 5){
      setErrors(['Username must be longer than 5 characters'])
    } else if (password.length < 4){
      setErrors(['password must be longer than 4 characters'])
    }  else if (!isEmail(email)) {
      setErrors(["Please enter a valid Email address."])

    }
      else if (email.length < 2){
      setErrors(['Enter a valid email!'])

    }else if (password !== repeatPassword) {
      setErrors(["Passwords don't match!"]);
    }
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form className="form" onSubmit={onSignUp}>

      <div className="container-2">
      <div>
        {errors.map((error, ind) => (
          <div className='error' key={ind}>{error}</div>
        ))}
      </div>
        <div className="brand-logo"></div>
        <div className="brand-title">Craft</div>
        <div className="inputs">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            className='input'
            value={username}
          ></input>

          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            className='input'
            value={email}
          ></input>

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className='input'
            onChange={updatePassword}
            value={password}
          ></input>

          <label className="label">Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            className='input'
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <input type="hidden" name="csrf_token" value="{{ csrf_token() }}"></input>
        <button className="login" type="submit">
        Sign Up
      </button>
      <input type="hidden" name="csrf_token" value="{{ csrf_token() }}"></input>
      <p>Already have an account?<NavLink to='/login'> Login Here</NavLink> </p>
      </div>
    </form>
  );
};

export default SignUpForm;
