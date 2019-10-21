import React, { Component } from "react";
import ModalForTrending from "./modalForTrending";
import Scroll from "./horizontalScroll";
import { getMovieRecomended } from "../../../services/movieServise";

class TrendingContainer extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      results: []
    };
  }

  async componentDidMount() {
    const { data } = await getMovieRecomended(this.props.id);
    const results = data.results.slice(0, 8);
    this.setState({ results });
  }

  render() {
    if (this.state.results.length === 0) {
      return "";
    } else {
      return (
        <div
          className="text-center "
          style={{
            overflow: "auto",
            whiteSpace: "nowrap"
          }}
        >
          <h5>
            <strong
              style={{
                background: "#FFF9F7",
                padding: "8px",
                textAlign: "center",
                boxShadow:
                  "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px"
              }}
            >
              Recomended
            </strong>
          </h5>
          <br />
          <Scroll
            data={this.state.results.map(x => (
              <ModalForTrending data={x} key={x.id} props={this.props.props} />
            ))}
          />
        </div>
      );
    }
  }
}

export default TrendingContainer;
