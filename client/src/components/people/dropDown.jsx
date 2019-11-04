import React, { Component } from 'react';
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";
import formatDate from "../../utilities/dataFormat";
import Rating from "react-rating";

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    onOpen = () => {
        if (this.state.isOpen === false) {
            this.setState({ isOpen: true });
        } else {
            this.setState({ isOpen: false });
        }
    };

    render() {
        if (this.props.data.length !== 0) {
            return (
                <div>
                    <h2 className="people-credits-tab-tiele">{this.props.title}</h2>
                    <ul>
                        {this.props.data
                            .filter(x => x !== null)
                            .sort(
                                (a, b) =>
                                    formatDate(b.release_date || b.first_air_date, "YYYY") -
                                    formatDate(a.release_date || a.first_air_date, "YYYY")
                            )
                            .slice(0, 3)
                            .map(x => (
                                <li key={x.id}>
                                    <strong> <Link to={x.original_title !== undefined ? `/movies/${x.id}` : `/tv/${x.id}`}> {x.original_title || x.name} </Link></strong> (
                              {formatDate(x.release_date || x.first_air_date, "YYYY MMM")}){" "}
                                    <Rating
                                        style={{ color: "gold" }}
                                        initialRating={x.vote_average / 2}
                                        emptySymbol={"fa fa-star-o fa-1x "}
                                        fullSymbol={"fa fa-star fa-1x "}
                                        start="0"
                                        stop="5"
                                        step="1"
                                        readonly="true"
                                    />
                                    <p>{x.job !== undefined ? 'Job' : 'Character'}: {x.job || x.character}</p>
                                </li>
                            ))}
                    </ul>
                    <div
                        onClick={this.onOpen}
                        className={
                            this.props.data.length <= 3
                                ? "display-none"
                                : ""
                        }
                        style={{ textAlign: "center", cursor: "pointer" }}
                    >
                        <i
                            className={`fa fa-chevron-circle-${
                                this.state.isOpen ? "up" : "down"
                                } fa-1x`}
                            aria-hidden="true"
                            style={{ margin: "5px" }}
                        ></i>
                        {this.state.isOpen ? `see less` : `see more`}
                    </div>
                    <Collapse isOpened={this.state.isOpen}>
                        <ul>
                            {this.props.data
                                .filter(x => x !== null)
                                .sort(
                                    (a, b) =>
                                        formatDate(b.release_date || b.first_air_date, "YYYY") -
                                        formatDate(a.release_date || a.first_air_date, "YYYY")
                                )
                                .slice(3, this.props.data.length)
                                .map(x => (
                                    <li key={x.id}>
                                        <strong> <Link to={x.original_title !== undefined ? `/movies/${x.id}` : `/tv/${x.id}`}> {x.original_title || x.name} </Link></strong> (
                                {formatDate(x.release_date || x.first_air_date, "YYYY MMM")}){" "}
                                        <Rating
                                            style={{ color: "gold" }}
                                            initialRating={x.vote_average / 2}
                                            emptySymbol={"fa fa-star-o fa-1x "}
                                            fullSymbol={"fa fa-star fa-1x "}
                                            start="0"
                                            stop="5"
                                            step="1"
                                            readonly="true"
                                        />
                                        <p>{x.job !== undefined ? 'Job' : 'Character'}: {x.job || x.character}</p>
                                    </li>
                                ))}
                        </ul>
                    </Collapse>
                </div>);
        } else {
            return <div></div>
        }

    }
}

export default DropDown;