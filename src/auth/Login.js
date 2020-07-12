import React, { Fragment } from 'react';
import './Login.css';
import userLogo from './User-Group-icon.png';

const Login = () => {
    return (
        <Fragment>
            <form className="form-signin">
                <div className="text-center mb-4">
                    <img className="mb-4" src={ userLogo } alt="user login" width="100" height="100" />
                    <h1 className="h3 mb-3 font-weight-normal">Login user</h1>
                </div>

                <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" required />
                    <label htmlFor="inputPassword">Password</label>
                </div>

                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted text-center">&copy; 2020</p>
            </form>
        </Fragment>
    );
}

export default Login;