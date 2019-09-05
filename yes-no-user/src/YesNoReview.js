import React from "react";
import "./yesNo.css";

class YesNoReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewSelect: null
    };
  }

  render() {
    return(
        <div className="review-container" style={{ border: "2px solid #9F79EE"}}>
            <div className="review">Hello! Did you have a positive officer interaction?</div>
            <div className="cop-emoji"><span aria-label="jsx-a11y/accessible-emoji" role="img">👮🏼‍</span></div>
            <div className="thumbs-down"><span aria-label="jsx-a11y/accessible-emoji" role="img">👎🏽</span></div>
        </div>
    )
  }
}

export default YesNoReview;
