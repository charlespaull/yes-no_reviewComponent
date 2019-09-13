import React from "react";
import "./userReview.css";

class UserReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // is the user hovering over the element? 
      // if so, trigger CSS class identified by the ID
      hoverID: undefined
    };

    // bound methods for hover on/off emoji

    this.onHoverEmoji = this.onHoverEmoji.bind(this);

    this.offHoverEmoji = this.offHoverEmoji.bind(this);
  }

  // method for when user hovers over emoji
  onHoverEmoji(event) {
    // console.log("hovering over this"); // this triggers
    // changes hoverId state props using this.setState
    this.setState({
      // change state to target the ID within the element in return statement
      hoverID: event.target.id
    });
  }

  // method for when user hovers off emoji
  offHoverEmoji(event) {
    // console.log("mouse off emoji"); // this triggers
    // set states back to default states
    this.setState({
      // back to undefined after user moves away from element
      hoverID: undefined
    });
  }

  render() {
    return (
      <div className="review-container">
        <div className="review">
          Hello! Did you have a positive officer interaction?
        </div>
        <div className="cop-emoji">
          <span
            // ID is unique to this <span> element
            id={"officerIcon"}
            aria-label="jsx-a11y/accessible-emoji"
            role="img"
            // logic: IF hoverID state is set to ID (from event.target.id) prop, then return CSS properties for "big"; otherwise, small props
            className={this.state.hoverID === "officerIcon" ? "big" : "small"}
            // eventHandlers for onHover & offHover
            onMouseEnter={event => this.onHoverEmoji(event)}
            onMouseLeave={event => this.offHoverEmoji(event)}
          >
            👮🏼‍
          </span>
        </div>
        {/* same stuff as above <span>*/}
        <div className="thumbs-down">
          <span
            id={"thumbIcon"}
            aria-label="jsx-a11y/accessible-emoji"
            role="img"
            className={this.state.hoverID === "thumbIcon" ? "big" : "small"}
            onMouseEnter={event => this.onHoverEmoji(event)}
            onMouseLeave={event => this.offHoverEmoji(event)}
          >
            👎🏽
          </span>
        </div>
      </div>
    );
  }
}

export default UserReview;
