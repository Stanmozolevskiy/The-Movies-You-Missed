import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <table className="col-12 table header">
            <tbody>
              <tr>
                <th style={{ border: "none" }}>
                  <Link to="/">
                    <img src="Thmdb.png" className="logo-img" alt="..." />
                  </Link>
                </th>
                <th style={{ border: "none" }}>
                  <h2 className="logo">The Movies You Missed</h2>
                  <a className="navbar-btn" href="/movie">
                    Movies
                  </a>
                  <a className="navbar-btn" href="/tv">
                    Tv Show
                  </a>
                  <a className="navbar-btn" href="/people">
                    People
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Header;
