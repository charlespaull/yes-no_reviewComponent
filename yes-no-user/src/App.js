import React from "react";
import UserReview from "./UserReview";
import RatingButtons from "./RatingButtons";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                {/* <UserReview /> */}
                <RatingButtons />
            </div>
        )
    }
}


export default App;