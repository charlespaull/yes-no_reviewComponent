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
            // state to capture user selected rating - default null, will change to value of rating.rating within looped array when clicked

            // I might not need this
            is_rating_selected: null,
            // boolean determines if user submits a rating - default F
            is_rating_submitted: false,
            //the index of the currently selected index
            selected_index: undefined,
        }

        // bound functions

        // method when user clicks on a rating button
        // might not need this
        // this.onSelectChange = this.onSelectChange.bind(this);

        // submit method
        this.onSubmitReview = this.onSubmitReview.bind(this);

        this.onSelectChangeIndex = this.onSelectChangeIndex.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
      console.log('component updated')
      if (prevState.selected_index !== this.state.selected_index) {
        console.log(this.state.selected_index)
      }
    }

    // methods
    // onSelectChange(event) {
    //     console.log(event.target.value); // gets review string value from array, works
    //     // change of state when clicked
    //     this.setState({
    //         // button shows up after user click (value is from prop on each rating button)
    //         is_rating_selected: event.target.value,
    //     })
    // }

    // this uses the 2nd parameter within the .map() function
    onSelectChangeIndex(index) {
        // setting the state to the index of the user click
        this.setState({
          selected_index: index,
        })
    }

    onSubmitReview(event) {
        event.preventDefault();
        console.log("do you see me?")
        // change boolean of state is_review_submitted to T
        this.setState({
            // change to true, not ! because only 1 submission needed
            is_rating_submitted: true
        })
    }

    // render function
    render() {
        // map over ratings array to get each rating name
        let officer_rating;
        // declare var that holds confirm component after user submit
        let confirmation_submit;
        // conditional to hold logic for submit - default null
        let conditional = null;
        // rating component variable holds rating before user submit
        let rating_component;

        // map over render
        officer_rating = (
            <div>
                {ratings.map((rating,index) => (
                    <div className="one-rating">
                        <input
                            className="input-button"
                            type="radio"
                            key={rating.id.toString()}
                            checked={this.state.selected_index === index}
                            // {checked={this.state.is_rating_selected === rating.rating}*/}
                            value={rating.rating}
                            // {/*onChange={this.onSelectChange}*/}
                            // from the index parameter - will track the index from the map function
                            onChange={() => this.onSelectChangeIndex(index)}>
                        </input>
                        <span>
                            {rating.rating}
                        </span>
                    </div>
                ))}
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
                        id={"policeIcon"}
                        aria-label="jxs-ally/accessible-emoji"
                        role="img">
                            👮🏼‍
                    </span>
                </div>  
            </div>
        )

        rating_component = (
            <div className="rating-container">
                <div className="rating-title">
                    <h3>Rate the Police Involved</h3>
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
        
        // conditional
        conditional = (
            <div>{(this.state.is_rating_submitted) ? confirmation_submit : rating_component}</div>
        )

        // this will be the return statement - will have conditional 
        return(
            <div>
                {conditional}    
            </div>
        )
    }

}

export default RatingButtons;
