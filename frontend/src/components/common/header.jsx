import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container" style={{ padding: "0px" }}>
        <div className="row">
          <table className="col-12 table">
            <tbody>
              <tr>
                <th style={{ border: "none", width: "75px" }}>
                  <Link to="/movies">
                    <img
                      // src="https://www.themoviedb.org/assets/2/v4/logos/293x302-powered-by-square-green-3ee4814bb59d8260d51efdd7c124383540fc04ca27d23eaea3a8c87bfa0f388d.png"
                      src={window.location.origin + "/movieapes.png"}
                      className="logo-img"
                      alt="logo"
                    />
                  </Link>
                </th>
                <th style={{ border: "none" }}>
                  <h2 className="logo">Movie Apes</h2>
                  <a className="navbar-btn" href="/movies">
                    Movies
                  </a>
                  <a className="navbar-btn" href="/tv">
                    Tv Show
                  </a>
                  <a className="navbar-btn" href="/people">
                    People
                  </a>
                  <a className="navbar-btn" href="/signin">
                    singup
                  </a>
                  <a className="navbar-btn" href="/register">
                    singin
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
