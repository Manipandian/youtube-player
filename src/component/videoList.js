import React from "react";

import VideoItem from "./videoItem";

const VideoList = ({ videos, onVideoClick }) => {

    const items = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} onVideoClick={onVideoClick}/>
    })

    return <div className="ui list">{items}</div>
}


export default VideoList;