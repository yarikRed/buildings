import axios from 'axios';

const KEY = 'AIzaSyDF4BMjyyyeYRtPa42nkgO-vZ7KRV-AyPY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`,
    }
});