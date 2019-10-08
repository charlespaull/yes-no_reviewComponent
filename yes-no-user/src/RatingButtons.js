import React, {Component} from "react";
import "./ratingButtons.css"

// class based component but no state - still need a render function
class RatingButtons extends Component {
    constructor(props) {
        super(props);
    }

    // render function
    render() {
        // console.log(this.props) // this works!! props from parent SliderParent.js passes through

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
                {this.props.ratings.map((rating,index) => (
                    <div className="one-rating">
                        <input
                            className="input-button"
                            type="radio"
                            key={rating.id.toString()}
                            checked={this.props.checked === index}
                            value={rating.rating}
                            // from the index parameter - will track the index from the map function
                            onChange={() => this.props.onChange(index)}>
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
                        onSubmit={event => this.props.onClick(event)}>
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
            <div>{(this.props.is_rating_submitted) ? confirmation_submit : rating_component}</div>
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

// when an API is needed and used 

    // // fetching data from the API (using .fetch())
    // componentDidMount() {
    //     // hypothetical fetch() call to backend API for data if data was not store locally
    //     // lifecycle method triggers and loads data, after initial render and re-renders with this data on page.

    //     fetch(/*some SQL query to probably grab the data*/)
    //         // callback - promise
    //         // brings in the data from .fetch()
    //         .then(res => res)
    //         // use res data to change the state
    //         .then(res => {
    //             this.setState({
    //                 // get the rating through something like this
    //                 rating_value: res.id[rating]
    //             })
    //         },
            
    //         // if there's an error, log the error
    //         (error) => {
    //             console.log(error)
    //             this.setState({
    //                 rating_value: error
    //             })
    //         }

    //         )            
    // }
