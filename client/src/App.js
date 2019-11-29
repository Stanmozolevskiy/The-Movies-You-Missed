import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { handleSearch } from "./services/searchService";
import SearchBox from "./components/search/searchBox";
import Movie from "./components/movies/movies";
import TvShow from "./components/tvShows/tvShows";
import People from "./components/people/people";
import Footer from "./components/common/footer/footer";
import MovieDetais from "./components/movieDetails/movieDetails";
import SearchComponent from "./components/search/searchComponent";
import SingUp from "./components/login/register";
import SingIn from "./components/login/signIn";
import NavBar from "./components/common/navbar/navBar";
import Home from "./components/home/home";
import ConfrimEmail from "./components/login/confirmEmail";
import PeopleDetails from "./components/people/peopleDetails/peopleDetails";
import RegisterForm from "./components/login/register";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <ToastContainer /> */}
        <NavBar />
        <SearchBox onSearchSubmit={handleSearch} props={this.props} /> }
        <Switch>
          <Route path="/movies/:id" component={MovieDetais} />
          <Route path="/tv/:id" component={MovieDetais} />
          <Route path="/search/:path" component={SearchComponent} />
          <Route path="/movies/" component={Movie} />
          <Route path="/tv" component={TvShow} />
          <Route path="/home" component={Home} />
          <Route path="/people/:id" component={PeopleDetails} />
          <Route path="/people" component={People} />
          <Route path="/register" component={SingUp} />
          <Route path="/signin" component={SingIn} />
          <Route path="/confirmemail" component={ConfrimEmail} />
          <Redirect to="/home" />
          <Route path="/register" component={RegisterForm} />

          {/* <Route path="/not-found" component={NotFound} /> */}
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
