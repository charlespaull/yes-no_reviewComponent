import React, {Component} from "react";
import "./userReview.css";

class UserReview extends Component {
    constructor(props) {
        super(props);

        this.state = {
        // is the user hovering over the element?
        // if so, trigger CSS class identified by the ID
        hover_id: undefined,
        // boolean state if user clicks on an emoji to review
        // default is false
        has_user_submit: false
        };

        // bound methods for hover on/off emoji, hasUserSubmit methods
        this.onHoverEmoji = this.onHoverEmoji.bind(this);

        this.offHoverEmoji = this.offHoverEmoji.bind(this);

        this.hasUserSubmit = this.hasUserSubmit.bind(this);
    }  

  // method for when user hovers over emoji
    onHoverEmoji(event) {
        // console.log("hovering over this"); // this triggers
        // changes hover_id state props using this.setState
        this.setState({
          // change state to target the ID within the element in return statement
          hover_id: event.target.id
        });
    }

  // method for when user hovers off emoji
    offHoverEmoji(event) {
        // console.log("mouse off emoji"); // this triggers
        // set states back to default states
        this.setState({
          // back to undefined after user moves away from element
          hover_id: undefined
        });
    }

  // method triggers if user submits a review
    hasUserSubmit(event) {
        event.preventDefault();
        // console.log(event.target.id); // id is captured on click
        // user submitted a review - change the state to true
        this.setState({
          // note: only changing to true, not ! because user only needs to submit once.
          has_user_submit: true
        });
    }

    render() {
    // Note: overall logic - if (this.state.has_user_submit), return thank you element - otherwise, review Q component should stay on screen until submit

      let review;
      // null declared variable - will mutate hold condition of {conditional} if user submits, {review} if not.
      let conditional = null;
      // component that shows up when user clicks to submit a review
      let confirmed_submit;

    // review component before submit
      review = (
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
                    // logic: IF hover_id state is set to ID (from event.target.id) prop, then return CSS properties for "big"; otherwise, small props
                    className={this.state.hover_id === "officerIcon" ? "big" : "small"}
                    // eventHandlers for onHover & offHover
                    onMouseEnter={event => this.onHoverEmoji(event)}
                    onMouseLeave={event => this.offHoverEmoji(event)}
                    // onSubmit prop to trigger if user clicks on emoji
                    onClick={this.hasUserSubmit}>
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
                    className={this.state.hover_id === "thumbIcon" ? "big" : "small"}
                    onMouseEnter={event => this.onHoverEmoji(event)}
                    onMouseLeave={event => this.offHoverEmoji(event)}
                    // onSubmit prop to trigger if user clicks on emoji
                    onClick={this.hasUserSubmit}>
                  👎🏽
                </span>
            </div>
          </div>
      );

    // confirmed submit component
      confirmed_submit = (
          <div className="confirm-container">
              <div className="confirm">Thank you for the feedback!
              </div>
              <div className="smile-emoji">
                  <span
                      id={"smileIcon"}
                      aria-label="jsx-a11y/accessible-emoji"
                      role="img"
                      className={this.state.hover_id === "smileIcon" ? "big" : "small"}
                      onMouseEnter={event => this.onHoverEmoji(event)}
                      onMouseLeave={event => this.offHoverEmoji(event)}>
                  😊
                  </span>
              </div>
          </div>
      );

    // logic if user has submitted a review - different actions happen
      conditional = (
          <div>{(this.state.has_user_submit) ? confirmed_submit : review}</div>
      )

      return (
          <div>
          {/* returns the conditional variable with respective object based on this.state.has_user_submit T/F */}
          {conditional}
          </div>
      );
    }
}

export default UserReview;
