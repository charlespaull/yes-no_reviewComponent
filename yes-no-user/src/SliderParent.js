import React, {Component} from "react";
// import UserReview from "./UserReview";
import RatingButtons from "./RatingButtons"

// ratings array defined globally
// this will be used for numerous components - esp for ratings button & slider
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

class SliderParent extends Component {
    constructor(props){
        super(props);

        // all state will go here - passed down as props to each component
        this.state = {
            // boolean determines if user submits a rating - default F
           is_rating_submitted: false,
            // the index of the currently selected index (integer)
            selected_index: undefined,

        }

        // methods - these are parent methods for numerous components
        this.onSubmitReview = this.onSubmitReview.bind(this);
        this.onSelectChangeIndex = this.onSelectChangeIndex.bind(this)
    }

    // parent methods
    // select change - method used to update state when user clicks on a review button or slider value
    // this uses the 2nd optional parameter with the .map() function to track the index of the arr
    onSelectChangeIndex(index) {
        // setting the state to the index of the user click
        this.setState({
          selected_index: index,
        })
    }

    // user submits a review
    onSubmitReview(event, index) {
        console.log("do you see me?")
        // change boolean of state is_review_submitted to T
        this.setState({
            // change to true, not ! because only 1 submission needed
            is_rating_submitted: true,
        })
    }

    // render function
    render(){
        return(
            <div>
                <RatingButtons
                    ratings={ratings}
                    onChange={this.onSelectChangeIndex}
                    checked={this.state.selected_index}
                    onClick={this.onSubmitReview}>
                </RatingButtons>
            </div>
        )
    }
}

export default SliderParent;