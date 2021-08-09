import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../apis/youtube"
import VideosList from "./VideosList";

class App extends React.Component {
  state = {videosList: []}
  onSearchSubmit = async searchString => {
    let response = await youtube.get('/search', {
      params: {
        q: searchString
      }
    })
  this.setState({videosList: response.data.items})
    //console.log(this.state)
  }


  render() {

    return <div>
      <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      <VideosList videosList={this.state.videosList}/>
    </div>
  }
}

export default App;
