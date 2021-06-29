import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        {}
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="flex-row" style={{listStyle: "none"}}>
                    <li className="mx-1">
                        <Link style={{textDecoration:"none"}} to="/signup">
                            Signup
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link style={{textDecoration: "none"}} to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            );
        }
    }

    return (
        <header className="flex-row px-1">
            <h1>
                <Link style={{textDecoration: "none"}} to="/">
                    WALLPAPER MARKET
                </Link>
            </h1>

            <nav>
                {showNavigation()}
            </nav>

            <div className="row-banner">
                <div className="banner-text">
                    <h2>The best site to style your device</h2>
                </div>
            </div>
        </header>
    );
}

export default Nav;
