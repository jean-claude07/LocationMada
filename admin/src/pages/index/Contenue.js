import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Accueil from '../accueil/Accueil'
import E_commerce from '../e_commerce/E_commerce'
import Gallery from '../gallery/Gallery'
import Message from '../message/Message'
import Presentation from '../presentation/Presentation'
import reservation from '../reservation/reservation'

export class Contenue extends Component {
    render() {
        return (
            <>
                <Route exact path="/" component={Accueil}/>
                <Route exact path="/message" component={Message}/>
                <Route exact path="/commerce" component={E_commerce}/>
                <Route exact path="/reservations" component={reservation}/>
                <Route exact path="/gallery" component={Gallery}/>
                <Route exact path="/presentation" component={Presentation}/>
            </>
        )
    }
}

export default Contenue
