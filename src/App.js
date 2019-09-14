import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Movie from "./components/movies/movies";
import TvShow from "./components/tvShows/tvShows";
import People from "./components/people/people";
import Footer from "./components/common/footer";
import MovieDetais from "./components/movies/movieDetails";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <ToastContainer /> */}

        <Switch>
          <Route path="/movie/:id" component={MovieDetais} /> */}
          <Route path="/movies" component={Movie} /> */}
          <Route path="/tv" component={TvShow} /> */}
          <Route path="/people" component={People} /> */}
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
