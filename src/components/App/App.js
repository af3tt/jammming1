import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults:  ['name','artist','album','id'],
      playlistName: 'templistname',
      playlistTracks: ['name','artist','album','id']
  }
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
}
addTrack(track) {
  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return;
} else {
  this.state.playlistTracks.push(track.id);
}
}
removeTrack(track){
  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  this.state.playlistTracks.pop(track.id);
} else {
  return;
}
}

updatePlaylistName(name) {
  this.state.playlistName = "name";
}

  render() {
    return (
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">

    <div className="App-playlist">

          <SearchResults onAdd={this.addTrack}
                         searchResults={this.state.searchResults} />

          <Playlist onNameChange={this.updatePlaylistName}
                    onRemove={this.removeTrack}
                    playlistName={this.state.playlistName}
                    playlistTracks={this.state.playlistTracks}/>
    </div>
  </div>
</div>
    );
  }
}

export default App;
