import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialog from './Dialog';
import Artist from './Artist';

const API_KEY = '08a13424cb2130db2294fd410cfae1ff';

class Songs extends Component {

    state = {
        songData: "",
        isSongModalActive: false,
        artistData: "",
        isArtistModalActive: false
    }

    toggleModal = async(mbid) => {
        const api_call = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${ API_KEY }&mbid=${ mbid }&format=json`);
        
        const data = await api_call.json();

        this.setState({
            songData: data.track,
            isSongModalActive: !this.state.isSongModalActive
        });
    }

    toggleArtistModal = async(artist_name) => {
        const api_call = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${ artist_name }&api_key=${ API_KEY }&format=json`);
        
        const data = await api_call.json();

        console.log(data.artist);

        this.setState({
            artistData: data.artist,
            isArtistModalActive: !this.state.isArtistModalActive
        });
    }

    closeModal = () => {
        this.setState({
            isSongModalActive: !this.state.isSongModalActive
        })
    }

    closeArtistModal = () => {
        this.setState({
            isArtistModalActive: !this.state.isArtistModalActive
        })
    }

    render() {
        return (

            <section>

                <Dialog song = { this.state.songData } closeModal = { this.closeModal} isActive = { this.state.isSongModalActive } toggleModal = { this.toggleModal } />

                <Artist artist = { this.state.artistData } closeModal = { this.closeArtistModal} isActive = { this.state.isArtistModalActive } toggleModal = { this.toggleArtistModal } />
                
                <div className = "container">

                    { this.props.songs.map((song) => {

                        return(
                            
                            <div key = { song.url } style = {{ width: '25%', float: 'left', textAlign: 'center' }}>
                            
                                <img style={{ cursor: "pointer" }} src = { song.image[2]['#text'] } alt="" onClick = {(e) => this.toggleModal(song.mbid)} />
                                
                                

                                <br /><br />
                                <p><b>{ song.name }</b></p>

                                <p style={{ cursor: "pointer" }} onClick = {(e) => this.toggleArtistModal(song.artist.name)}>{ song.artist.name }</p>

                                <br /><br />

                            </div>

                        )

                    })}

                </div>
            
            </section>

        )
    }
}

export default Songs;