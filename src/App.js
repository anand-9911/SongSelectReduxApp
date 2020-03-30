import React from 'react';
import './App.css';
import SongList from './components/SongList'
import SongDetail from './components/SongDetail';

class App extends React.Component {
  render() {
    return (
      <div className="ui container grid">
        <div className="ui container row">
          <div className="column eight wide">
            <h1>Song List</h1>
            <SongList />
          </div>
          <div className="column eight wide">
            <SongDetail />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
