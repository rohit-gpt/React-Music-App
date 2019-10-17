import React, { Component } from 'react';
import Modal from 'react-modal';

class Artist extends Component {

    componentDidMount() {
        Modal.setAppElement('body');
    }

    render() {
        if(this.props.artist) {
            return(

                <Modal isOpen={this.props.isActive} onRequestClose={this.props.closeModal}>

                <div style={{ textAlign: "center" }}>

                    <img style={{ border: "1px solid black" }} alt="" src={ this.props.artist.image[3]["#text"] } />
                    <br /><br />
                    <h4>{ this.props.artist.name }</h4>

                    {/* <p>
                        <b>Album:</b> <span style={{ color: "rgb(255, 136, 0)" }}>{ this.props.song.album.title }</span>

                        <b style={{ paddingLeft: "5%" }}>Artist:</b> <span style={{ color: "rgb(255, 136, 0)" }}>{ this.props.song.artist.name }</span>
                    </p> */}

                    <br />

                    <p>

                        <span style={{ color: "rgb(255,136,0)" }}>{ this.props.artist.stats.listeners }</span> listeners
                        
                        <span style={{ color: "rgb(255,136,0)", paddingLeft: "5%" }}>{ this.props.artist.stats.playcount }</span> playcounts
                        
                    </p>

                    <br />

                    <div>

                        {this.props.artist.tags.tag.map((tag) => {
                            return (
                                <span key={ tag.url } className="tag">{ tag.name }</span>
                            )
                        })}

                    </div>

                    <br />
                    <br />

                    Published On: <span style={{ color: "rgb(255, 136, 0" }}>{ this.props.artist.bio.published }</span>
                    
                    <br /><br />

                    <p style={{ color: "rgb(255, 136, 0" }}>Related Artists</p>

                    <div style={{ float: "left", width: "100%" }}>

                        {this.props.artist.similar.artist.map((artist) => {
                            return (
                                <div style={{ float: "left", marginLeft: "10%", marginRight: "10%" }} key={ artist.url }>
                                    <img style={{ borderRadius: "24px" }} alt="" src={ artist.image[2]['#text'] } />
                                    <br />
                                    { artist.name }
                                </div>
                            )
                        })}

                    </div>

                    <div style={{ float: "left", marginTop: "5%" }}>
                    <center><p style={{ width: "75%" }}>
                        { this.props.artist.bio.summary }
                    </p></center></div>

                    <button style={{ backgroundColor: "red", color: "white", padding: "1%", width: "15%" }} onClick={ this.props.closeModal }>Close</button>
                </div>

            </Modal>

            )
        } else {
            return (

                <Modal isOpen={this.props.isActive} onRequestClose={this.props.closeModal}>

                    <br/><br/><br/>

                    <h1 style={{ textAlign: "center" }}>Artist Not Found</h1>

                    <br/><br/><br/>
                    
                    <center><button style={{ backgroundColor: "red", color: "white", padding: "1%", width: "15%" }} onClick={ this.props.closeModal }>Close</button></center>

                </Modal>

            )
        }
    }

}

export default Artist;