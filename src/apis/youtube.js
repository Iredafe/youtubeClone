import axios from 'axios';

const KEY = 'AIzaSyDIv620Xf0CSO63lF5P3Mo95MC_xC7WTdQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
