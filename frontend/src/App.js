import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Movie from "./components/movies/movies";
import TvShow from "./components/tvShows/tvShows";
import People from "./components/people/people";
import Footer from "./components/common/footer";
import MovieDetais from "./components/common/movieDetails/movieDetails";
import SearchComponent from "./components/search/searchComponent";
import SingUp from "./components/login/register";
import SingIn from "./components/login/signIn";
import NavBar from "./components/common/navbar/navBar";
import ConfrimEmail from "./components/login/confirmEmail";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <ToastContainer /> */}
        <NavBar />
        <Switch>
          <Route path="/movies/:id" component={MovieDetais} />
          <Route path="/tv/:id" component={MovieDetais} />
          <Route path="/search/:path" component={SearchComponent} />
          <Route path="/movies" component={Movie} />
          <Route path="/tv" component={TvShow} />
          <Route path="/people" component={People} />
          <Route path="/register" component={SingUp} />
          <Route path="/signin" component={SingIn} />
          <Route path="/confirmemail" component={ConfrimEmail} />
          {/* <Redirect to="/movies" /> */}
          {/* <Route path="/register" component={RegisterForm} />
            
            <Route path="/not-found" component={NotFound} /> */}
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
