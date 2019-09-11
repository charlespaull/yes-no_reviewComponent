import React from "react";
import "./userReview.css";

class UserReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // states will be CSS properties that then will be changed with this.setState({}) with each handleClick
      // opacity of emojis - 1 is fully opaque (no change)
      opacity: 1,
      // scale to enlarge and shrink emojis when hovered (1 is no change)
      scale: 1,
      // transition when emoji is clicked to feedback page
      transition: 1,
    };

    // I am unsure if I have to bind any functions here yet.
    this.onHoverEmoji = this.onHoverEmoji.bind(this);

    this.offHoverEmoji = this.offHoverEmoji.bind(this);
  }

  onHoverEmoji() {
    // trying to see if this triggers
    console.log("hovering over this");
    // setState to change state properites
    this.setState({
      // change opacity to less than 1
      // opacity: 0.4,
      
      // hover - opacity of T/F
      hover: !this.state.hover,
      // change scale to be a tad bigger when hovered
      scale: 1.3
    })
  }

  offHoverEmoji() {
    // trying to make sure this triggers
    console.log("mouse off emoji");
    // set states back to default states
    this.setState({
      // opacity back to 1
      // opacity: 1,
      // scale back to 1
      scale: 1,
      // a boolean hover of T/F
      hover: false
    })
  }

  render() {
    return (
      <div className="review-container">
        <div className="review">
          Hello! Did you have a positive officer interaction?
        </div>
        <div className="cop-emoji">
          <span aria-label="jsx-a11y/accessible-emoji" role="img" className="cop" onMouseEnter={this.onHoverEmoji} onMouseLeave={this.offHoverEmoji}>
            👮🏼‍
          </span>
        </div>
        <div className="thumbs-down">
          <span aria-label="jsx-a11y/accessible-emoji" role="img" className="t-down" onMouseEnter={this.onHoverEmoji} onMouseLeave={this.offHoverEmoji}>
            👎🏽
          </span>
        </div>
      </div>
    );
  }
}

export default UserReview;
