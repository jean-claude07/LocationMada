import React, { Component } from 'react'
import Area from './area_start/Area'
import Blog from './blog_area/Blog'
import Category from './category_area/Category'
import People from './people_visite/People'
import Popular from './popular_location/Popular'
import Service from './service_area/Service'
import Testimonial from './testimonial_start/Testimonial'

export class Home extends Component {
    render() {
        return (
            <div>
                <Area/>
                <Popular/>
                {/* <Service/> */}
                <Category/>
                <People/>
                <Testimonial/>
                <Blog/>
            </div>
        )
    }
}

export default Home
