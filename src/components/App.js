import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../apis/youtube"
import VideosList from "./VideosList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {videos: [], selectedVideo: null}
  onSearchSubmit = async searchString => {
    let response = await youtube.get('/search', {
      params: {
        q: searchString
      }
    })
  this.setState({videos: response.data.items})
    //console.log(this.state)
  }

  onVideoSelect = (video) => {
    console.log('From the app', video)
    this.setState({selectedVideo: video})
  }


  render() {

    return <div>
      <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideosList videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
      />
    </div>
  }
}

export default App;
