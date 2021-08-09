import React from "react"
import VideoItem from "./VideoItem";

let videosList = ({videos}) => {
  console.log(videos)
   let renderedList = videos.map((video) => {
     return <VideoItem video={video}/>
   })
  return <div>
    {renderedList}
  </div>
}

export default  videosList
