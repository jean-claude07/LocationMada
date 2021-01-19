import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-area header-transparent">
                        <div className="main-header">
                        <div className="header-bottom  header-sticky">
                                <div className="container-fluid">
                                    <div className="row align-items-center">
                                     
                                        <div className="col-xl-2 col-lg-2 col-md-1">
                                            <div className="logo">
                                                <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                                            </div>
                                        </div>
                                        <div className="col-xl-10 col-lg-10 col-md-8">
                                       
                                            <div className="main-menu f-right d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">                                                                                                                                     
                                                        <li><Link to="/">Home</Link></li>
                                                        <li><a href="about.html">About</a></li>
                                                        <li><Link to="categories">Catagories</Link></li>
                                                        <li><Link to="condition_generale">Conditon Genrale</Link></li>
                                                        <li><Link to="promotion">Promotion</Link></li>
                                                        <li><Link to="contact">Contact</Link></li> &nbsp; &nbsp;
                                                        {/* <li className="add-list"><a href="listing_details.html"><i className="ti-plus"></i> add Listing</a></li> */}
                                                        <li className="login"><Link to="espace_client">
                                                            <i className="ti-user"></i> Sign in or Register</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                   
                                        <div className="col-12">
                                            <div className="mobile_menu d-block d-lg-none"></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        </div>
                </div>
                 
            </header>
        )
    }
}

export default Header
