import React, {Component} from "react";

class RatingButtons extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            // boolean determines if a rating button is selected - this should be an 
            is_rating_selected: null,
            // boolean determines if user submits a rating - default F

            is_rating_submitted: false
        }

        // bound functions
    }  
        


    // methods

    // render function
    render() {
        // array of objects that is rendered (each rating button has an ID match as well)
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

        // map over ratings array to get each rating name
        let officer_rating;
        // loop over render
        officer_rating = (
            <div style={{display: "flex", flexDirection: "col"}}>
                {ratings.map(rating => (
                    <div>
                        <span 
                            key={rating.id} 
                            id={rating.id}>
                                {rating.rating}
                        </span>
                        <input 
                            type="radio" 
                            value={rating.id} 
                            checked={this.state.is_rating_selected}>
                        </input>
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
                    <span style={{fontSize: "12px"}}>{officer_rating}</span>
                </div>
            </div>
        )
    }
      
}




export default RatingButtons;