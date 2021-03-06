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
import Policy from "./components/common/policy/privacy";
import About from "./components/common/about/about";
import NotFound from "./components/common/notfound/notfound";
import Genres from "./components/genres/genres";
import GenreDetail from "./components/genres/genreDetails";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <ToastContainer /> */}
        <NavBar />
        <SearchBox onSearchSubmit={handleSearch} props={this.props} />
        <Switch>
          <Route path="/movies/:id" component={MovieDetais} />
          <Route path="/tv/:id" component={MovieDetais} />
          <Route path="/people/:id" component={PeopleDetails} />
          <Route path="/genres/:id" component={GenreDetail} />
          <Route path="/search/:path" component={SearchComponent} />
          <Route path="/movies/" component={Movie} />
          <Route path="/tv" component={TvShow} />
          <Route path="/people" component={People} />
          <Route path="/genres" component={Genres} />
          <Route path="/register" component={SingUp} />
          <Route path="/signin" component={SingIn} />
          <Route path="/confirmemail" component={ConfrimEmail} />
          <Route path="/policy" component={Policy} />
          <Route path="/about" component={About} />
          {/* <Route path="/not-found" component={NotFound} />*/}
          {/* <Redirect to="/not-found" /> */}
          <Route path="/register" component={RegisterForm} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
