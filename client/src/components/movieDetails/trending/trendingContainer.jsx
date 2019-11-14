import React, { Component } from "react";
import ModalForTrending from "./modalForTrending";
import Scroll from "./horizontalScroll";
import { getMovieRecomended } from "../../../services/movieServise";
import { TouchScrollable } from "react-scrolllock";

class TrendingContainer extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      results: []
    };
  }

  async componentDidMount() {
    const { data } = await getMovieRecomended(this.props.id);
    const results = data.results.slice(0, 12);
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
                left: " 34%",
                textAlign: "center",
                boxShadow:
                  "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px"
              }}
            >
              Recomended
            </strong>
          </h5>
          <br />
          {/* <TouchScrollable>
            <Scroll */}
            {this.state.results.map(x => (
                <ModalForTrending
                  data={x}
                  key={x.id}
                  props={this.props.props}
                />
              ))}
            {/* />
          </TouchScrollable> */}
        </div>
      );
    }
  }
}

export default TrendingContainer;
