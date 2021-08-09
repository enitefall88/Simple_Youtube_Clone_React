import React from "react"

let VideoItem = ({video}) => {
 return <div>
   {video.snippet.description}
 </div>
}

export default VideoItem
