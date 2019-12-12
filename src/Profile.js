import React from 'react/index';
import profile from './images/profile.png';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <img src={profile} className={'Profile-logo'} alt="profilepicture" />
                <h3> @JamieDimon2000 </h3>
            </div>
        );
    }
}

Profile.propTypes = {};

export default Profile;
