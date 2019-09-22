import React, { Component } from 'react';
import Songs from './component/Songs.js';
import Form from './component/Form.js';
import Country from './component/Country.js';
// import { Button } from 'react-bootstrap';

const API_KEY = '08a13424cb2130db2294fd410cfae1ff';

class App extends Component {

  state = {
    songs: [],
    country: ""
  }

  componentDidMount = async() => {
    const api_call = await fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=india&api_key=${ API_KEY }&format=json`);
    const data = await api_call.json();
    
    this.setState({
      songs: data.tracks.track,
      country: "india"
    });
  }

  getSongs = async (e) => {
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${ country }&api_key=${ API_KEY }&format=json`);
    
    const data = await api_call.json();
    this.setState({
      songs: data.tracks.track,
      country: country
    });
  }

  // getSongDetails = async(mbid) => {
    
  //   const api_call = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key =${ API_KEY }&mbid=${ mbid }&format=json>`);
    
  //   const data = await api_call.json();

  //   console.log(data);

  // }

  render() {
    return (

      <div className="App">

        <Country country = { this.state.country } />

        <Form getSongs = { this.getSongs } />

        <Songs songs = { this.state.songs } />
          
      </div>

    )
  }
}

export default App;
