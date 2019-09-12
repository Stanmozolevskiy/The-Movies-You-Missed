import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Movie from "./components/movies/movies";
import TvShow from "./components/tvShows/tvShows";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        
        {/* <ToastContainer /> */}
        {/* <NavBar /> */}

        {/* <main className="container"> */}
        <Switch>
          <Route path="/movie" component={Movie} /> */}
          <Route path="/tv" component={TvShow} /> */}
          <Redirect to="/not-found" />
          {/* <Route path="/register" component={RegisterForm} />
            
            <Route path="/not-found" component={NotFound} /> */}
        </Switch>
        {/* </main> */}
      </React.Fragment>
    );
  }
}

export default App;
