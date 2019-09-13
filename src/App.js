import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Movie from "./components/movies/movies";
import TvShow from "./components/tvShows/tvShows";
import People from "./components/people/people";
import Footer from './components/common/footer'

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
          <Route path="/people" component={People} /> */}
          <Redirect to="/movie" />
          {/* <Route path="/register" component={RegisterForm} />
            
            <Route path="/not-found" component={NotFound} /> */}
        </Switch>
        {/* </main> */}
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
