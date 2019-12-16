import React, { Component } from "react";
import { getMoviesByGenre, getMoviegenres } from "../../services/genreServise";
import Title from "../common/title";
import { totalPages } from "../common/pagination";
import MovieContainer from "../common/movieContainer";
import Paginateion from "../common/pagination";

class GenreDetail extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      data: [],
      genres: [],
      totalPages: [],
      curentPage: 1,
      forcePage: 0
    };
  }
  async componentDidMount() {
    const data = await getMoviesByGenre(this.props.match.params.id, 1);
    const genres = await getMoviegenres();
    this.setState({
      data: data.data.results,
      genres: genres.data.genres,
      curentPage: data.page,
      totalPages: totalPages(data)
    });
    // move this to paginate
  }
  handlePageChange = async ({ selected }) => {
    const page = selected + 1;

    const data = await getMoviesByGenre(this.props.match.params.id, page);
    this.setState({
      curentPage: page,
      data: data.data.results
    });
  };
  render() {
    if (this.state.genres.length < 19) {
      return "";
    } else {
      return (
        <div>
          <div className="row" style={{ margin: "0px" }}>
            <div className="col-3 filters"></div>
            <div className=" col-12 col-md-8 col-sm-12 ">
              <Title
                text={
                  this.state.genres.find(
                    x => x.id == this.props.match.params.id
                  ).name
                }
              />
              {this.state.data
                .filter(x => x !== null)
                .map(data => (
                  <MovieContainer
                    key={data.id}
                    data={data}
                    props={this.props}
                  />
                ))}
            </div>
            <div className="col-1 filters"></div>
          </div>
          <div className="row" style={{ margin: "0px" }}>
            <div className="col-0 col-sm-4"></div>
            <div className="col-12 col-sm-6" style={{ textAlign: "center" }}>
              <Paginateion
                totalPages={this.state.totalPages}
                handlePageChange={this.handlePageChange}
                forcePage={this.state.forcePage}
              />
            </div>
            <div className="col-0 col-sm-2"></div>
          </div>
        </div>
      );
    }
  }
}

export default GenreDetail;
