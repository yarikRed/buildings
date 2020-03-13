import React from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {
    state = { 
        videos: [],
        selectedVideo: null
    };

    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        })
        .then(response => {
            this.setState({videos: response.data.items});
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect}
                />
            </div>
        );
    }
}

export default App;