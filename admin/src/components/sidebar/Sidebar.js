import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="col-md-3 left_col">
                    <div className="left_col scroll-view">
                        <div className="navbar nav_title" style={{border: '0'}}>
                        <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Gentelella Alela!</span></a>
                        </div>

                        <div className="clearfix"></div>

                        <div className="profile clearfix">
                        <div className="profile_pic">
                            <img src="images/img.jpg" alt="..." className="img-circle profile_img"/>
                        </div>
                        <div className="profile_info">
                            <span>Welcome,</span>
                            <h2>John Doe</h2>
                        </div>
                        </div>

                        <br />

                        <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                        <div className="menu_section">
                            <h3>General</h3>
                            <ul className="nav side-menu">
                            <li><Link to="/"><i className="fa fa-home"></i> Home </Link>

                            </li>
                            <li><Link to="/message"><i className="fa fa-edit"></i> Messages </Link>
                               
                            </li>
                            <li><Link to="/commerce"><i className="fa fa-desktop"></i> E-commerce </Link>
                            </li>
                            <li><Link to="/reservations"><i className="fa fa-table"></i> Reservations </Link>
                               
                            </li>
                            <li><Link to="/presentation"><i className="fa fa-bar-chart-o"></i> Presentation </Link>
                              
                            </li>
                            <li><Link to="/gallery"><i className="fa fa-clone"></i>Gallery </Link>
                               
                            </li>
                            </ul>
                        </div>
                        </div>

                    </div>
                    <div class="sidebar-footer hidden-small">
                        <a data-toggle="tooltip" data-placement="top" title="Settings">
                            <span class="fa fa-gears" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                            <span class="fa fa-star-half-full" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Lock">
                            <span class="fa fa-eye-slash" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                            <span class="fa fa-power-off" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar
