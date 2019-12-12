import React from 'react/index';
import Tweetapp from "./Tweetapp";
import Profile from "./Profile";

const LeftSide = (props) => {

    console.log(props);
    return (
        <div>
            <Profile/>
        </div>
    );
}

export default LeftSide;
