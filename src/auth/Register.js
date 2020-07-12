import React, { Fragment } from 'react';
import './Login.css';
import userLogo from './reg.png';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <Fragment>
            <form className="form-signin">
                <div className="text-center mb-4">
                    <img className="mb-4" src={ userLogo } alt="user login" width="100" height="100" />
                    <h1 className="h3 mb-3 font-weight-normal">Register user</h1>
                </div>

                <div className="form-label-group">
                    <input type="text" id="fullname" className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="fullname">Full name</label>
                </div>
                <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="your password" required />
                    <label htmlFor="inputPassword">Your Password</label>
                </div>

                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                <p>already create account ?
                <Link to="/login"> Login here</Link></p>
                <p className="mt-5 mb-3 text-muted text-center">&copy; 2020</p>
            </form>
        </Fragment>
    );
}

export default Register;