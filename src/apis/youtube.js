import axios from 'axios'

let KEY = 'AIzaSyDAQe5fb6VgFX7v3OOcXLPl_Qne1AkJ07g'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
})
