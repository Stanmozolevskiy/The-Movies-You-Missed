import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    token: undefined,
    isOpen: 'collapse'
  };
  async componentDidMount() {
    const token = await localStorage.getItem("token");
    if (!token) {
      this.setState({ token: undefined });
    } else {
      this.setState({ token: "token" });
    }
  }
  removeToken = () => {
    localStorage.removeItem("token");
    this.setState({ token: undefined });
  };

  handleToggle = () => {
    this.state.isOpen === 'collapse' ?
      this.setState({ isOpen: '' })
      : this.setState({ isOpen: 'collapse' })

  }

  render() {
    const { isOpen } = this.state;
    return (
      <nav
        className="navbar  navbar-expand-md custom-navbar navbar-dark "
        style={{ background: "#201d1d" }}
      >
        {/* <h6 className='header-text'>Movie Apes</h6> */}
        <Link to="/movies">
          <img
            // src="https://www.themoviedb.org/assets/2/v4/logos/293x302-powered-by-square-green-3ee4814bb59d8260d51efdd7c124383540fc04ca27d23eaea3a8c87bfa0f388d.png"
            src={window.location.origin + "/movieapes.png"}
            className=" logo-img"
            alt="logo"
            style={{ border: "none", width: "75px", marginLeft: "400px" }}
          />
        </Link>

        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav ml-5" style={{ marginTop: "55px" }}>
            <li className="nav-item">
              <a className="nav-link" href="/movies">
                <b>Movie</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tv">
                <b>Tv Show</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/people">
                <b>People</b>
              </a>
            </li>
          </ul>
        </div>

        <button
          className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"
          onClick={this.handleToggle}
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        {/* Colapse options */}
        <div className={`${isOpen} navbar-collapse`} id="navbarSupportedContent1">

          {/* Links */}
          <ul className={`${isOpen} navbar-nav`}>
            <li className="nav-item">
              <a className="nav-link" href="/movies">
                <b>Movie</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tv">
                <b>Tv Show</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/people">
                <b>People</b>
              </a>
            </li>
          </ul>
          {this.state.token === undefined ? (
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                <a className="nav-link" href="/signin">
                  <b>Loging</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  <b>Regester</b>
                </a>
              </li>
            </ul>
          ) : (
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item">
                  <a className="nav-link" onClick={this.removeToken}>
                    <b>Logout</b>
                  </a>
                </li>
              </ul>
            )}
          {/* Links */}

        </div>
        {/* Colapse options */}

        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          {this.state.token === undefined ? (
            <ul className={`${isOpen} navbar-nav `}>
              <li className="nav-item">
                <a className="nav-link" href="/signin">
                  <b>Loging</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  <b>Regester</b>
                </a>
              </li>
            </ul>
          ) : (
              <ul className={`${isOpen} navbar-nav `}>
                <li className="nav-item">
                  <a className="nav-link" onClick={this.removeToken}>
                    <b>Logout</b>
                  </a>
                </li>
              </ul>
            )}
        </div>
      </nav>
    );
  }
}

export default NavBar;
