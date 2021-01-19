import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

export class Map extends Component {
    state={
        message: null,
        notification: ''
    }

    handleChange = event => {
        this.setState({
            message: event.target.value
        })
    }

    render() {
        console.log(this.state.notification)
        return (
            <div>
                <section class="contact-section">
                    <div class="container">
                        <div class="d-none d-sm-block mb-5 pb-4">
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h2 class="contact-title">Get in Touch</h2>
                            <div>
                                <p style={{color: 'blueviolet'}}>{this.state.notification} </p>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '', 
                                    telephone: '',
                                    message: null
                                }}

                                onSubmit={(values, {resetForm}) => {
                                    const formData = new FormData;
                                    formData.append('name', values.name)
                                    formData.append('email', values.email)
                                    formData.append('telephone', values.telephone)
                                    formData.append('message', this.state.message)
                                    axios.post('contacts', formData).then(response => {
                                        if(response.status === 200 ){
                                            
                                            resetForm();
                                            console.log(response)
                                            this.setState({
                                                notification: response.data.notification
                                            })
                                        }
                                    })
                                }}
                            >
                                <Form class="form-contact contact_form" >
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <textarea class="form-control w-100" name="message"  cols="30" rows="9" onChange={this.handleChange} placeholder=" Enter Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <Field class="form-control valid" name="name"  type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter votre Nom et Prenom"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <Field class="form-control valid" name="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <Field class="form-control" name="telephone" type="number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Entrer votre numero telephone"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <Field type="submit" class="button button-contactForm boxed-btn" value="envoyer" />
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                        <div class="col-lg-3 offset-lg-1">
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-home"></i></span>
                                <div class="media-body">
                                    <h3>Buttonwood, California.</h3>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                                <div class="media-body">
                                    <h3>+1 253 565 2365</h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-email"></i></span>
                                <div class="media-body">
                                    <h3>support@colorlib.com</h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                </section>
            </div>
        )
    }
}

export default Map
