import React, { Component } from 'react'

export class Listing extends Component {
    state={
        prix: '50000 ar'
    }
    render() {
        
        return (
            <div>
                <div className="hero-area3 hero-overly2 d-flex align-items-center ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-9">
                                <div className="hero-cap text-center pt-50 pb-20">
                                    <h2>Our Listing</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="listing-area pt-120 pb-120">
                    <div className="col-xl-12 col-lg-12">
                        <div className="row">
          
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="row">
                                    <div className="col-12">
                                            <div className="small-section-tittle2 mb-45">
                                            <h4>Advanced Filter</h4>
                                        </div>
                                    </div>
                                </div>
                         
                                <div className="category-listing mb-50">
                                   
                                    <div className="single-listing">
                                        
                                        <div className="input-form">
                                            <input type="text" placeholder="What are you finding?"/>
                                        </div>
                                        
                                        <aside class="single_sidebar_widget post_category_widget">
                                            <h4 class="widget_title">Category</h4>
                                            <div className="clear" style={{padding: '10px'}}></div>
                                            <ul class="list cat-list">
                                                <li>
                                                    <a href="#" class="d-flex">
                                                        <p>Resaurant food</p>
                                                        <p>(37)</p>
                                                    </a>
                                                </li>
                                                <hr/>
                                                <li>
                                                    <a href="#" class="d-flex">
                                                        <p>Travel news</p>
                                                        <p>(10)</p>
                                                    </a>
                                                </li>
                                                <hr/>
                                                <li>
                                                    <a href="#" class="d-flex">
                                                        <p>Modern technology</p>
                                                        <p>(03)</p>
                                                    </a>
                                                </li>
                                                <hr/>
                                                <li>
                                                    <a href="#" class="d-flex">
                                                        <p>Product</p>
                                                        <p>(11)</p>
                                                    </a>
                                                </li>
                                                <hr/>
                                                <li>
                                                    <a href="#" class="d-flex">
                                                        <p>Inspiration</p>
                                                        <p>21</p>
                                                    </a>
                                                </li>
                                                <hr/>
                                                <li>
                                                    <a href="#" class="d-flex">
                                                        <p>Health Care (21)</p>
                                                        <p>09</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </aside>
                                        <br/><br/>
                                    </div>

                                    <div class="single-listing">
                                
                                        <aside class="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                                            <div class="small-section-tittle2">
                                                <h4>Prix total en <code>Ariary</code></h4>
                                            </div>
                                            <div class="widgets_inner">
                                                <div class="range_item">
                                                
                                                <div className="input-form">
                                                    <input type="text" value={this.state.prix}/>
                                                    
                                                </div>
                                                <div className="single-listing">
                                        
                                                    <button type="button" class="btn btn-danger btn-lg btn-block">reset</button>
                                                </div>
                                                </div>
                                            </div>
                                            
                                            <br/><br/>
                                        </aside>

                                        <aside class="single_sidebar_widget popular_post_widget"  >
                                            <h3 class="widget_title">Plus recent</h3><br/>
                                            <div class="media post_item" style={{margin: "5px"}}>
                                                <img src="assets/img/post/post_1.png" alt="post"/>
                                                <div class="media-body">
                                                    <a href="blog_details.html">
                                                        <h6>From life was you fish...</h6>
                                                    </a>
                                                    <p>January 12, 2019</p>
                                                </div>
                                            </div>
                                            <div className="clear" style={{padding: '5px'}}></div>
                                            <div class="media post_item">
                                                <img src="assets/img/post/post_2.png" alt="post"/>
                                                <div class="media-body">
                                                    <a href="blog_details.html">
                                                        <h6>The Amazing Hubble</h6>
                                                    </a>
                                                    <p>02 Hours ago</p>
                                                </div>
                                            </div>
                                            <div className="clear" style={{padding: '5px'}}></div>
                                            <div class="media post_item">
                                                <img src="assets/img/post/post_3.png" alt="post"/>
                                                <div class="media-body">
                                                    <a href="blog_details.html">
                                                        <h6>Astronomy Or Astrology</h6>
                                                    </a>
                                                    <p>03 Hours ago</p>
                                                </div>
                                            </div>
                                            <div className="clear" style={{padding: '5px'}}></div>
                                            <div class="media post_item">
                                                <img src="assets/img/post/post_4.png" alt="post"/>
                                                <div class="media-body">
                                                    <a href="blog_details.html">
                                                        <h6>Asteroids telescope</h6>
                                                    </a>
                                                    <p>01 Hours ago</p>
                                                </div>
                                            </div>
                                        </aside>
                                    
                                       
                                    </div>

                                </div>
                                
                            </div>
                            
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="count mb-35">
                                            <span>5432 Listings are available</span>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="listing-details-area">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="single-listing mb-30">
                                                    <div className="list-img">
                                                        <img src="assets/img/gallery/list1.png" alt=""/>
                                                         
                                                    </div>
                                                    <div className="list-caption">
                                                        <span ><i href="#">  Open </i></span>
                                                        <h3><a href="listing_details.html">Saintmartine</a></h3>
                                                        <p>700/D, Kings road, Green lane, 85/ London</p>
                                                        <div className="list-footer">
                                                        <ul>
                                                            <li>
                                                                <input type="button" class="btn btn-outline-warning btn-lg btn-block" value="Louer"/>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 ">
                                                <div className="single-listing mb-30">
                                                    <div className="list-img">
                                                        <img src="assets/img/gallery/list2.png" alt=""/>
                                                         
                                                    </div>
                                                    <div className="list-caption">
                                                        <span> Open </span>
                                                        <h3><a href="listing_details.html">Saintmartine</a></h3>
                                                        <p>700/D, Kings road, Green lane, 85/ London</p>
                                                        <div className="list-footer">
                                                        <ul>
                                                            <li>
                                                                <input type="button" class="btn btn-outline-warning btn-lg btn-block" value="Louer"/>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 ">
                                                <div className="single-listing mb-30">
                                                    <div className="list-img">
                                                        <img src="assets/img/gallery/list3.png" alt=""/>
                                                        
                                                    </div>
                                                    <div className="list-caption">
                                                        <span> Open </span>
                                                        <h3><a href="listing_details.html">Saintmartine</a></h3>
                                                        <p>700/D, Kings road, Green lane, 85/ London</p>
                                                        <div className="list-footer">
                                                        <ul>
                                                            <li>
                                                                <input type="button" class="btn btn-outline-warning btn-lg btn-block" value="Louer"/>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 ">
                                                <div className="single-listing mb-30">
                                                    <div className="list-img">
                                                        <img src="assets/img/gallery/list4.png" alt=""/>
                                                        
                                                    </div>
                                                    <div className="list-caption">
                                                        <span> Open </span>
                                                        <h3><a href="listing_details.html">Saintmartine</a></h3>
                                                        <p>700/D, Kings road, Green lane, 85/ London</p>
                                                        <div className="list-footer">
                                                        <ul>
                                                            <li>
                                                                <input type="button" class="btn btn-outline-warning btn-lg btn-block" value="Louer"/>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 ">
                                                <div className="single-listing mb-30">
                                                    <div className="list-img">
                                                        <img src="assets/img/gallery/list5.png" alt=""/>
                                                         
                                                    </div>
                                                    <div className="list-caption">
                                                        <span> Open </span>
                                                        <h3><a href="listing_details.html">Saintmartine</a></h3>
                                                        <p>700/D, Kings road, Green lane, 85/ London</p>
                                                        <div className="list-footer">
                                                        <ul>
                                                            <li>
                                                                <input type="button" class="btn btn-outline-warning btn-lg btn-block" value="Louer"/>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 ">
                                                <div className="single-listing mb-30">
                                                    <div className="list-img">
                                                        <img src="assets/img/gallery/list6.png" alt=""/>
                                                       
                                                    </div>
                                                    <div className="list-caption">
                                                        <span> Open </span>
                                                        <h3><a href="listing_details.html">Saintmartine</a></h3>
                                                        <p>700/D, Kings road, Green lane, 85/ London</p>
                                                        <div className="list-footer">
                                                            <center>
                                                                <ul>
                                                                    <li>
                                                                        <input type="button" class="btn btn-outline-warning btn-lg btn-block" value="Louer"/>
                                                                    </li>
                                                                </ul>
                                                            </center>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             
                                <div className="pagination-area pt-70 text-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="single-wrap d-flex justify-content-center">
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="pagination justify-content-start">
                                                            <li className="page-item active"><a className="page-link" href="#">01</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">02</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">03</a></li>
                                                        <li className="page-item"><a className="page-link" href="#"><span className="ti-angle-right"></span></a></li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="small-section-tittle2 mb-45">
                                            <h4>List des choix</h4>
                                        </div>
                                    
                                    </div>
                                </div>
                         
                                <div className="category-listing mb-50">
                                   
                                   

                                <button type="button" className="btn btn-outline-success btn-lg btn-block" >
                                    valider
                                </button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Listing;
