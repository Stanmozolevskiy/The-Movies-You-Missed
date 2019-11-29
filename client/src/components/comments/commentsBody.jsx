import React, { Component } from "react";

class CommentsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.data.map(x => x.content)
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <h4>Revues here</h4>

            {/*  */}
            {/* leave coment area */}
            <div className="media mt-3 shadow-textarea">
              <img
                className="d-flex rounded-circle avatar z-depth-1-half mr-3"
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                alt="Avatar"
              />
              <div className="media-body">
                <h5 className="mt-0 font-weight-bold blue-text">
                  Danny Tatuum
                </h5>
                <div className="form-group basic-textarea rounded-corners">
                  <textarea
                    className="form-control z-depth-1"
                    id="exampleFormControlTextarea345"
                    rows="3"
                    placeholder="Write your comment..."
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Existing comments */}
            {this.props.data.map(x => (
              <div key={x.id} className="media">
                <img
                  className="d-flex rounded-circle avatar z-depth-1-half mr-3"
                  src={`${window.location.origin}/icons/${Math.floor(
                    Math.random() * 9 + 1
                  ) + ".PNG"}`}
                  alt="Avatar"
                />
                <div className="media-body">
                  <h5 className="mt-0 font-weight-bold blue-text ">
                    {x.author}
                  </h5>
                  <p className="multiline-ellipsis">{x.content}</p>
                  {x.content.length >= 315 ? (
                    <button
                      className="btn btn-primary btn-sm"
                      style={{ float: "right" }}
                    >
                      read full
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}

            {/*  */}
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default CommentsBody;
