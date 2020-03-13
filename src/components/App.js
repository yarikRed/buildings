import React from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoItem from './VideoItem';
import VideoList from './VideoList';

class App extends React.Component {
    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;