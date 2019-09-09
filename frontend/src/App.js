import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Movie from "./components/movies";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <ToastContainer /> */}
        {/* <NavBar /> */}
        <main className="container">
          <Switch>
            {/* <Route path="/register" component={RegisterForm} />
            
            <Route path="/not-found" component={NotFound} /> */}
            <Route path="/movies" component={Movie} /> */}
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
