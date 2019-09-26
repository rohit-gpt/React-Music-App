import React, { Component } from 'react';
import Modal from 'react-modal';

class Dialog extends Component {

    componentDidMount() {
        Modal.setAppElement('body');
    }

    render() {
        if(this.props.song && this.props.song.album) {
            return(

                <Modal isOpen={this.props.isActive} onRequestClose={this.props.closeModal}>

                <div style={{ textAlign: "center" }}>

                    <img style={{ border: "1px solid black" }} alt="" src={ this.props.song.album.image[3]["#text"] } />
                    <br /><br />
                    <h4>{ this.props.song.name }</h4>

                    <p>
                        <b>Album:</b> <span style={{ color: "rgb(255, 136, 0)" }}>{ this.props.song.album.title }</span>

                        <b style={{ paddingLeft: "5%" }}>Artist:</b> <span style={{ color: "rgb(255, 136, 0)" }}>{ this.props.song.artist.name }</span>
                    </p>

                    <br />

                    <p>

                        <span style={{ color: "rgb(255,136,0)" }}>{ this.props.song.listeners }</span> listeners
                        
                        <span style={{ color: "rgb(255,136,0)", paddingLeft: "5%" }}>{ this.props.song.playcount }</span> playcounts
                        
                    </p>

                    <br />

                    <div>

                        {this.props.song.toptags.tag.map((tag) => {
                            return (
                                <span key={ tag.url } className="tag">{ tag.name }</span>
                            )
                        })}

                    </div>

                    <br />
                    <br />

                    Published On: <span style={{ color: "rgb(255, 136, 0" }}>{ this.props.song.wiki.published }</span>
                    
                    <br /><br />

                    <center><p style={{ width: "75%" }}>
                        { this.props.song.wiki.summary }
                    </p></center>

                    <button style={{ backgroundColor: "red", color: "white", padding: "1%", width: "15%" }} onClick={ this.props.closeModal }>Close</button>
                
                </div>

            </Modal>

            )
        } else {
            return (

                <Modal isOpen={this.props.isActive} onRequestClose={this.props.closeModal}>

                    <br/><br/><br/>

                    <h1 style={{ textAlign: "center" }}>Track Not Found</h1>

                    <br/><br/><br/>
                    
                    <center><button style={{ backgroundColor: "red", color: "white", padding: "1%", width: "15%" }} onClick={ this.props.closeModal }>Close</button></center>

                </Modal>

            )
        }
    }

}

export default Dialog;