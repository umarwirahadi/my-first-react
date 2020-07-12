import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Banner from './Banner';
import Login from '../auth/Login';
import Register from '../auth/Register';
import NewsPage from '../news/newsPage';
const Header = () => {
    return (
        <Fragment>
            <Router>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                    <Link className="navbar-brand" to="/">My Porto</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/artikel">Artikel</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">News</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mr-right">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/register">Register <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/" component={ Banner } />
                    <Route path="/artikel" component={ NewsPage } />
                    <Route path="/news" component={ NewsPage } />
                    <Route path="/login" component={ Login } />
                    <Route path="/register" component={ Register } />
                </Switch>
            </Router>

        </Fragment>
    );
}

export default Header;