import React from "react";
import "./userReview.css";

class UserReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewSelect: null
    };
  }

  render() {
    return (
      <div className="review-container">
        <div className="review">
          Hello! Did you have a positive officer interaction?
        </div>
        <div className="cop-emoji">
          <span aria-label="jsx-a11y/accessible-emoji" role="img" className="cop">
            👮🏼‍
          </span>
        </div>
        <div className="thumbs-down">
          <span aria-label="jsx-a11y/accessible-emoji" role="img" className="t-down">
            👎🏽
          </span>
        </div>
      </div>
    );
  }
}

export default UserReview;
