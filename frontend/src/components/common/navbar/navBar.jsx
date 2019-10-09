import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      class="navbar  navbar-expand-md custom-navbar navbar-dark"
      style={{ background: "#201d1d" }}
    >
      <Link to="/movies">
        <img
          // src="https://www.themoviedb.org/assets/2/v4/logos/293x302-powered-by-square-green-3ee4814bb59d8260d51efdd7c124383540fc04ca27d23eaea3a8c87bfa0f388d.png"
          src={window.location.origin + "/movieapes.png"}
          className=" logo-img"
          alt="logo"
          style={{ border: "none", width: "75px", marginLeft: "400px" }}
        />
      </Link>

      <div class="collapse navbar-collapse " id="collapsibleNavbar">
        <ul class="navbar-nav ml-5" style={{ marginTop: "55px" }}>
          <li class="nav-item">
            <a class="nav-link" href="/movies">
              <b>Movie</b>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/tv">
              <b>Tv Show</b>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/people">
              <b>People</b>
            </a>
          </li>
        </ul>
      </div>

      <button
        class="navbar-toggler navbar-toggler-right custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon "></span>
      </button>
      <div class="collapse navbar-collapse " id="collapsibleNavbar">
        <ul class="navbar-nav ml-auto ">
          <li class="nav-item">
            <a class="nav-link" href="/signin">
              <b>Loging</b>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register">
              <b>Regester</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
