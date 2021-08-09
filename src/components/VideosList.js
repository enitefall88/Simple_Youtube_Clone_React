import React from "react"
import VideoItem from "./VideoItem";

let videosList = ({videos, onVideoSelect}) => {
  console.log(videos)
   let renderedList = videos.map((video) => {
     return <VideoItem onVideoSelect={onVideoSelect} video={video} id={video.id.videoId}/>
   })
  return <div className="ui relaxed divided list">
    {renderedList}
  </div>
}

export default  videosList
