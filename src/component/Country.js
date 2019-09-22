import React, { Component } from 'react';

class Country extends Component {

    render() {
        return (

            <div style = {{ textAlign: "center", margin: '7%', color: 'rgb(255, 136, 0)' }}>
                <h2>TOP TRACKS IN { this.props.country.toUpperCase() }</h2>
            </div>

        )
    }

}

export default Country;