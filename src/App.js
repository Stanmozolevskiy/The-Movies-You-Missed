import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Movie from "./components/movies/movies";
import TvShow from "./components/tvShows/tvShows";
import People from "./components/people/people";
import Footer from "./components/common/footer";
import MovieDetais from "./components/common/movieDetails";
import SearchComponent from "./components/common/searchComponent";
import Header from "./components/common/header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <ToastContainer /> */}
        <Header></Header>
        <Switch>
          <Route path="/movies/:id" component={MovieDetais} />
          <Route path="/tv/:id" component={MovieDetais} />
          <Route path="/search/:path" component={SearchComponent} />
          <Route path="/movies" component={Movie} />
          <Route path="/tv" component={TvShow} />
          <Route path="/people" component={People} />
          <Redirect to="/movies" />
          {/* <Route path="/register" component={RegisterForm} />
            
            <Route path="/not-found" component={NotFound} /> */}
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
