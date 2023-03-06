import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      Header
      <header>
        <ul className="navbar">
          <li className="subnav">
            <ul>
              <li>
                <Link to="/">
                  <img
                    src="https://www.happycow.net/img/happycow-logo.svg"
                    alt="logo happycow"
                    className="header-logo"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">Explore</Link>
              </li>
              <li>
                <Link to="#">Forum</Link>
              </li>
              <li>
                <Link to="#">Community</Link>
              </li>
              <li>
                <Link to="#">More</Link>
              </li>
            </ul>
          </li>

          <li className="member center">
            <ul>
              <li>
                <Link to="#" className="btn btn-white">
                  Add listing
                </Link>
              </li>
              <li>
                <Link to="#" className="btn btn-purple">
                  Login / Join
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </header>
    </div>
  );
};
