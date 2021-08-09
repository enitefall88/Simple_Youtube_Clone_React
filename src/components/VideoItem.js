import React from "react"
import './VideoItem.css'
import VideoDetail from "./VideoDetail"

let VideoItem = ({video, onVideoSelect, selectedVideo}) => {
 return <div onClick={() => onVideoSelect(video)} className="video-item item">
  <img className="ui image"
       src={video.snippet.thumbnails.medium.url}/>
  <div className="content">
  <div className="header"> {video.snippet.title} </div>
   </div>
   </div>
}

export default VideoItem
