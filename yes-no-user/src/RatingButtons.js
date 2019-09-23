import React, {Component} from "react";
import "./ratingButtons.css"


// what if you defined it here?
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
            is_rating_selected: null,
            // boolean determines if user submits a rating - default F
            is_rating_submitted: false,
            // position of the user click at the moment - default -1 means no position
            rating_position: -1
        }

        // bound functions
        
        // method when user clicks on a rating button
        this.onSelectChange = this.onSelectChange.bind(this);

        // submit method

    }  
    
    // methods
    onSelectChange(event) {
        console.log(event.target.value); // gets review string value from array, works
        // change of state when clicked
        this.setState({
            // button shows up after use click (F --> T)
            is_rating_selected: event.target.value,
            // change position based off index
            // rating_position: 
        })
    }

    // render function
    render() {
        // map over ratings array to get each rating name
        let officer_rating;
        // loop over render
        officer_rating = (
            <div>
                {ratings.map((rating) => (
                    <div className="one-rating">
                        <input 
                            className="input-button"
                            type="radio" 
                            key={rating.id.toString()} 
                            checked={this.state.is_rating_selected === rating.rating}
                            value={rating.rating}
                            onChange={event => this.onSelectChange(event)}>
                        </input>
                        <span>
                        {rating.rating}</span>
                    </div>
                ))}
            </div>
        )
    

        return(
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
                        <button className="button-submit">Submit</button>    
                    </div>
            </div>
        )
    }
      
}

export default RatingButtons;