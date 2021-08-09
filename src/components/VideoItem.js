import React from "react"

let VideoItem = ({video}) => {
 return <div>
  <img src={video.snippet.thumbnails.default.url}/>
  {video.snippet.title}
 </div>
}

export default VideoItem
