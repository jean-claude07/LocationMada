import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contenue from './Contenue';

export class Index extends Component {
    render() {
        return (
            <div class="container body">
                <div class="main_container">
                    <BrowserRouter>
                        <Sidebar/>
                        <Navbar/>
                        <Switch>
                        <div className="content">
                            <div class="right_col" role="main">
                                <div class="row" style={{display: 'inline-block'}} >
                                    <Contenue/>
                                </div>
                            </div>
                        </div>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default Index
