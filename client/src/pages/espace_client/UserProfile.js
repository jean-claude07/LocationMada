import React, { Component } from 'react'

export class UserProfile extends Component {
    render() {
        return (
            <div>
                <div className="hero-area2  slider-height2 hero-overly2 d-flex align-items-center ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center pt-50">
                                    <h2>BienVenue </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="listing-area pt-120 pb-120">
                    <div className="container">
                        
                    <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="contenue">
                                <div className="col-12">
                                    <h2 className="contact-title">Profile</h2>
                                </div>
                                <div >
                                    <div class="blog_left_sidebar">
                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="assets/img/blog/single_blog_1.png" alt=""/>
                                               
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="blog_details.html">
                                                    <h2>Google inks pact for new 35-storey office</h2>
                                                </a>
                                                <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                                    he earth it first without heaven in place seed it second morning saying.</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                                                    <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                </div>

                                
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="blog_right_sidebar">
                                    <aside class="single_sidebar_widget search_widget">

                                    </aside>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default UserProfile
