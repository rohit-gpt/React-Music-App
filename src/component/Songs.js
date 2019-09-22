import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialog from './Dialog';

const API_KEY = '08a13424cb2130db2294fd410cfae1ff';

class Songs extends Component {

    state = {
        songData: "",
        isActive: false
    }

    toggleModal = async(mbid) => {
        const api_call = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${ API_KEY }&mbid=${ mbid }&format=json`);
        
        const data = await api_call.json();

        console.log(data.track);

        this.setState({
            songData: data.track,
            isActive: !this.state.isActive
        });
    }

    closeModal = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        return (

            <section>

                <Dialog song = { this.state.songData } closeModal = { this.closeModal} isActive = { this.state.isActive } toggleModal = { this.toggleModal } />

                <div className = "container">

                    { this.props.songs.map((song) => {

                        return(
                            
                            <div key = { song.url } style = {{ width: '25%', float: 'left', textAlign: 'center' }}>
                            
                                <img src = { song.image[2]['#text'] } alt="" onClick = {(e) => this.toggleModal(song.mbid)} />
                                
                                

                                <br /><br />
                                <p><b>{ song.name }</b></p>

                                <p>{ song.artist.name }</p>

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