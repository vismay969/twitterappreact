import React from 'react/index';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Home = (props) => {

    console.log(props);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <LeftSide/>
                </div>
                <div>
                    <RightSide/>
                </div>
            </div>
        </div>
    );
}

export default Home;
