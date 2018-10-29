import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from '../../containers/homepage';
import About from '../../containers/about';


class Header extends React.Component {
        render() {
        return (
            <div className="firstext">
                <h1>This is Initial Module.</h1>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/topics">Topics</Link>
                            </li>
                        </ul>
                        <hr />
                        <Route exact path="/" component={App} />
                        <Route path="/about" component={About} />
                      </div>
                </Router>
                </div>
        );
    }
}

export default Header;