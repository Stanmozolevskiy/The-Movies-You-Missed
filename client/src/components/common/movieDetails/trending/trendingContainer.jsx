import React, { Component } from "react";
import ModalForTrending from "./modalForTrending";
import Scroll from "./horizontalScroll";
import { getMovieRecomended } from '../../../../services/movieServise'


class TrendingContainer extends Component {
    constructor(prpos) {
        super(prpos);
        this.state = {
            results: []
        }
    }

    async componentDidMount() {
        const { data } = await getMovieRecomended(this.props.id)
        const results = data.results.slice(0, 6)
        this.setState({ results })
    }

    render() {
        if (this.state.results.length === 0) {
            return ''
        } else {
            return (
                <div
                    className="text-center "
                    style={{
                        overflow: "auto",
                        whiteSpace: "nowrap"
                    }}
                >
                    <h5><strong>Recomended</strong></h5>
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