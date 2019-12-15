import React, { Component } from "react";
import { getMoviesByGenre, getMoviegenres } from "../../services/genreServise";
import Title from "../common/title";
import MovieContainer from "../common/movieContainer";

class GenreDetail extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      data: [],
      genres: []
    };
  }
  async componentDidMount() {
    const { data } = await getMoviesByGenre(this.props.match.params.id, 1);
    const genres = await getMoviegenres();
    this.setState({ data: data.results, genres: genres.data.genres });
    // console.log(genres.data.genres);
  }
  render() {
    if (this.state.genres.length < 19) {
      return "";
    } else {
      return (
        <div className="row" style={{ margin: "0px" }}>
          <div className="col-3 filters"></div>
          <div className=" col-12 col-md-8 col-sm-12 ">
            <Title
              text={
                this.state.genres.find(x => x.id == this.props.match.params.id)
                  .name
              }
            />
            {this.state.data
              .filter(x => x !== null)
              .map(data => (
                <MovieContainer key={data.id} data={data} props={this.props} />
              ))}
          </div>
          <div className="col-1 filters"></div>
        </div>
      );
    }
  }
}

export default GenreDetail;
