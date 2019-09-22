import React, { Component } from 'react';

class Form extends Component {

    render() {
        return (

            <div className = "countryForm">
                <form onSubmit = { this.props.getSongs }>

                    <select name = "country">
                        <option value="india">India</option>
                        <option value="canada">Canada</option>
                        <option value="france">France</option>
                        <option value="china">China</option>
                        <option value="greece">Greece</option>
                        <option value="japan">Japan</option>
                    </select>

                    <button>Search</button>

                </form>
            </div>

        )
    }
}

export default Form;
