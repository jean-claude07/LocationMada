import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Popular extends Component {
    render() {
        return (
            <center>
                <div class="popular-location section-padding30">
                    <div class="col-lg-11" style={{alignItems: 'center'}}>
                        <div class="row">
                            <div class="col-lg-12">
                               
                                <div class="section-tittle text-center mb-80">
                                    <span>Most visited places</span>
                                    <h2>Popular Locations</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-location mb-30">
                                    <div class="location-img">
                                        <img src="assets/img/gallery/location1.png" alt=""/>
                                    </div>
                                    <div class="location-details">
                                        <p>New York</p>
                                        <a href="/list" class="location-btn">65 <i class="ti-plus"></i> Location</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-location mb-30">
                                    <div class="location-img">
                                        <img src="assets/img/gallery/location2.png" alt=""/>
                                    </div>
                                    <div class="location-details">
                                        <p>Paris</p>
                                        <Link to="/list" class="location-btn">60 <i class="ti-plus"></i> Location</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-location mb-30">
                                    <div class="location-img">
                                        <img src="assets/img/gallery/location3.png" alt=""/>
                                    </div>
                                    <div class="location-details">
                                        <p>Rome</p>
                                        <a href="/list" class="location-btn">50 <i class="ti-plus"></i> Location</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-location mb-30">
                                    <div class="location-img">
                                        <img src="assets/img/gallery/location4.png" alt=""/>
                                    </div>
                                    <div class="location-details">
                                        <p>Italy</p>
                                        <a href="/list" class="location-btn">28 <i class="ti-plus"></i> Location</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-location mb-30">
                                    <div class="location-img">
                                        <img src="assets/img/gallery/location5.png" alt=""/>
                                    </div>
                                    <div class="location-details">
                                        <p>Nepal</p>
                                        <a href="/list" class="location-btn">99 <i class="ti-plus"></i> Location</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-location mb-30">
                                    <div class="location-img">
                                        <img src="assets/img/gallery/location6.png" alt=""/>
                                    </div>
                                    <div class="location-details">
                                        <p>indonesia</p>
                                        <a href="/list" class="location-btn">78 <i class="ti-plus"></i> Location</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="row justify-content-center">
                            <div class="room-btn pt-20">
                                <a href="/categories" class="btn btn-danger">View All Places</a>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        )
    }
}

export default Popular
