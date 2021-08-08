import React, {useEffect} from "react"
import SearchBar from "./SearchBar"
import youtube from "../apis/youtube"
import VideosList from "./VideosList";

class App extends React.Component {
  state = {videos: null}
  onSearchSubmit = async searchString => {
    let response = await youtube.get('/search', {
      params: {
        q: searchString
      }
    })
    // todo this.setState({videos: response})
    console.log(response.data)
  }


  render() {

    return <div>
      <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      <VideosList videos={this.state}/>
    </div>
  }
}

export default App;
