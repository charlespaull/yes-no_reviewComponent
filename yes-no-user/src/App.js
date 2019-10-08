import React from "react";
import UserReview from "./UserReview";
import RatingButtons from "./RatingButtons";
import SliderParent from "./SliderParent";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                {/* <UserReview /> */}
                {/* <RatingButtons /> */}
                <SliderParent />
            </div>
        )
    }
}


export default App;