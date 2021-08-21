import React  from "react"
import SearchBar from "./SearchBar"
import youtube from "../apis/youtube"
import VideosList from "./VideosList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {videos: [], selectedVideo: null}

  componentDidMount() {
    this.setState(this.onSearchSubmit('swords'))
  }

  onSearchSubmit = async searchString => {
    let response = await youtube.get('/search', {
      params: {
        q: searchString
      }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
    //console.log(this.state)
  }

  onVideoSelect = (video) => {
    console.log('From the app', video)
    this.setState({selectedVideo: video})
  }


  render() {

    return <div>
      <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      <div className="ui grid">
        <div className="ui row">
        <div className="eleven wide column">
          <VideoDetail video={this.state.selectedVideo}/>
          </div>
        <div className="five wide column">
          <VideosList videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect}
        />
        </div>
        </div>
      </div>

    </div>
  }
}

export default App;
