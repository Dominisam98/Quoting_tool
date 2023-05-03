import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import './loginform.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/quotes/new' />;
  }

  return (
  <div className='background'>
    <form className='form' onSubmit={onLogin}>

      <div className='container'>
        <div className='brand-logo'></div>
        <div className='brand-title'>Craft Charter</div>
        <div className='inputs'>
        <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          className='input'
          onChange={updateEmail}
        />
      </div>

        <label className='label' htmlFor='password'>Password</label>
        <input
        className='input'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button className='login' type='submit'>Login</button>
        <input type="hidden" name="csrf_token" value="{{ csrf_token() }}"></input>
        <p>Don't have an account?<NavLink to='/sign-up'> Sign Up Here</NavLink> </p>
        <p>Forgot your password?<NavLink to='/forgot-password'> Reset</NavLink></p>


        </div>

    </form>
  </div>
  );
};

export default LoginForm;
