import React from 'react/index';

const TwitterHandle = (props) => {

    console.log(props);
    return (
        <div>
            <h1 className={'leftText'}>{props.handle}</h1>
        </div>
    );
}

export default TwitterHandle;
