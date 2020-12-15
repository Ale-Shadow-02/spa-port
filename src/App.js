import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from "./About";
import Examples from "./Examples";
import Contacts from "./Contacts";
import './App.css';

class App extends React.Component {
    render () {
        return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="#">
                    SPA-порфтолио
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    Обо мне
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacts">
                                    Контакты
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/examples">
                                    Примеры
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contacts">
                    <Contacts />
                </Route>
                <Route path="/examples">
                    <Examples />
                </Route>
            </div>
        </BrowserRouter>
        );
    }
  
}

export default App;
