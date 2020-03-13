import React from 'react';
import './VideoDetail.css';

const VideoDetails = ({video}) =>{
    if (!video) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div className="ui segment">
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    );
}

export default VideoDetails;