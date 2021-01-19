import React, { Component } from 'react'
import Start from './Contact_start/Start'
import Map from './map_contact/Map'

export class Contact extends Component {
    render() {
        return (
            <div>
                <Start/>
                <Map/>
            </div>
        )
    }
}

export default Contact
