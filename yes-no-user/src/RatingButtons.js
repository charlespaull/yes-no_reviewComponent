import React, {Component} from "react";
import "./ratingButtons.css"

// ratings array defined globally
const ratings = [
            {
                id: 0,
                rating: "Poor",
            },

            {
                id: 1,
                rating: "Below Average"
            },
 
            {
                id: 2,
                rating: "Average"
            },

            {
                id: 3,
                rating: "Above Average"
            },

            {
                id: 4,
                rating: "Excellent"
            }
        ]

class RatingButtons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // boolean determines if user submits a rating - default F
            is_rating_submitted: false,
            //the index of the currently selected index
            selected_index: undefined,
            // rating value - rating.rating, but located by the index
            rating_value: undefined
        }

        // bound functions
        // submit method
        this.onSubmitReview = this.onSubmitReview.bind(this);
        this.onSelectChangeIndex = this.onSelectChangeIndex.bind(this)
    }

    // helps determine if prev state is same as next state from user update - if not, update to newest state
    componentDidUpdate(prevProps, prevState) {
      console.log('component updated')
      if (prevState.selected_index !== this.state.selected_index) {
        console.log(this.state.selected_index)
      }
    }

    // methods

    // this uses the 2nd parameter within the .map() function
    onSelectChangeIndex(index) {
        // setting the state to the index of the user click
        this.setState({
          selected_index: index,
        })
    }

    onSubmitReview(event, index) {
        event.preventDefault();
        console.log("do you see me?")
        // change boolean of state is_review_submitted to T
        this.setState({
            // change to true, not ! because only 1 submission needed
            is_rating_submitted: true,
            // rating_value: this.state.index[rating.rating]
        })
    }

    // render function
    render() {
        // officer_rating variable holds data that is mapped over to render rating elements
        let officer_rating;
        // rating component variable holds rating before user submit
        let rating_component;
        // declare var that holds confirm component after user submit
        let confirmation_submit;
        // conditional to hold logic for submit - default null
        let conditional = null;

        // map over ratings array
        officer_rating = (
            <div>
                {ratings.map((rating,index) => (
                    <div className="one-rating">
                        <input
                            className="input-button"
                            type="radio"
                            key={rating.id.toString()}
                            checked={this.state.selected_index === index}
                            value={rating.rating}
                            // from the index parameter - will track the index from the map function
                            onChange={() => this.onSelectChangeIndex(index)}>
                        </input>
                        <span className="span-rating">
                            {rating.rating}
                        </span>
                    </div>
                ))}
            </div>
        )

        rating_component = (
            <div className="rating-container">
                <div className="rating-title">
                    Rate the Police Involved
                </div>
                <div className="buttons-container">
                    <div>
                        {officer_rating}
                    </div>
                </div>
                <div className="submit-container">
                    <button
                        className="button-submit"
                        onClick={event => this.onSubmitReview(event)}>
                            Submit
                    </button>
                </div>
            </div>
        )

        // confirmed_submit component
        confirmation_submit = (
                <div className="confirmation-container">
                    <div className="rating-thankYou">
                        Thank you for your Rating!
                    </div>
                    <div className="police-emoji">
                        <span
                            className="span-rating"
                            id={"policeIcon"}
                            aria-label="jxs-ally/accessible-emoji"
                            role="img">
                                👮🏼‍
                        </span>
                    </div>  
                </div>
        )

        // conditional
        conditional = (
            <div>{(this.state.is_rating_submitted) ? confirmation_submit : rating_component}</div>
        )

        // return statement - will have conditional 
        return(
            <div>
                {conditional}    
            </div>
        )
    }

}

export default RatingButtons;
