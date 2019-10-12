import React, { Component } from 'react';
import MovieModal from './trailerModal'

// Button and the Modile together
class TrailerButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        }
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };
    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    render() {
        return (
            <div>
                <div onClick={this.openModal} className='vatch-trailer-btn-cover hover-red'  >
                <i
                className="fa fa-play fa-1x"
                aria-hidden="true"
                style={{ margin: "10px", cursor: "pointer" }}
            />   watch trailer
              
                </div>
                <MovieModal
                    modalIsOpen={this.state.modalIsOpen}
                    closeModal={this.closeModal}
                    videoId={this.props.data.key}
                />
            </div>
        );
    }
}

export default TrailerButton;