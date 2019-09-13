import React from "react";
import "./userReview.css";

class UserReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // is the user hovering over the element?
      // if so, trigger CSS class identified by the ID
      hoverID: undefined,
      // boolean state if user clicks on an emoji to review
      // default is false
      hasUserSubmit: false
    };

    // bound methods for hover on/off emoji, hasUserSubmit methods

    this.onHoverEmoji = this.onHoverEmoji.bind(this);

    this.offHoverEmoji = this.offHoverEmoji.bind(this);

    this.hasUserSubmit = this.hasUserSubmit.bind(this);
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

  // method triggers if user submits a review
  hasUserSubmit(event) {
    event.preventDefault();
    // set variable to capture emoji ID for review count
    let reviewCount;
    // console.log(event.target.id); // id is captured on click
    // user submitted a review - change the state to true
    this.setState({
      // only changing to true, not ! because user only needs to submit once.
      hasUserSubmit: true
    });

    reviewCount = event.target.id;
    console.log("This is the review " + reviewCount);
  }

  render() {
    // logic - if (hasUserSubmit), then return thank you element
    // return element variable
    let confirmedSubmit;
    if (this.hasUserSubmit) {
      confirmedSubmit = (
        <div className="confirm-container">
          <div className="confirm">Thank you for the feedback!</div>
          <div className="smile-emoji">
            <span
            id={"smileIcon"}
            aria-label="jsx-a11y/accessible-emoji"
            role="img"
            className={this.state.hoverID === "smileIcon" ? "big" : "small"}
            onMouseEnter={event => this.onHoverEmoji(event)}
            onMouseLeave={event => this.offHoverEmoji(event)}
            >
              😊
            </span>
          </div>
        </div>
      );
    }

    return (
      <div>
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
            // path="/reviewSubmitted"
            // logic: IF hoverID state is set to ID (from event.target.id) prop, then return CSS properties for "big"; otherwise, small props
            className={this.state.hoverID === "officerIcon" ? "big" : "small"}
            // eventHandlers for onHover & offHover
            onMouseEnter={event => this.onHoverEmoji(event)}
            onMouseLeave={event => this.offHoverEmoji(event)}
            // onSubmit prop to trigger if user clicks on emoji
            onClick={this.hasUserSubmit}
          >
            👮🏼‍
          </span>
        </div>
        {/* same stuff as above <span>*/}
        <div className="thumbs-down">
          <span
            // ID is unique to this <span> element
            id={"thumbIcon"}
            aria-label="jsx-a11y/accessible-emoji"
            role="img"
            className={this.state.hoverID === "thumbIcon" ? "big" : "small"}
            onMouseEnter={event => this.onHoverEmoji(event)}
            onMouseLeave={event => this.offHoverEmoji(event)}
            // onSubmit prop to trigger if user clicks on emoji
            onClick={this.hasUserSubmit}
          >
            👎🏽
          </span>
        </div>
      </div>

      <div>{confirmedSubmit}</div>

      </div>
    );
  }
}

export default UserReview;
