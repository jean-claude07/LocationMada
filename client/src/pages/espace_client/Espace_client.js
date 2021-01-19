import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import './espaceClient.css'



export class Espace_client extends Component {
    state={
        photo: null
    }

    handleChange = (e) => {
        this.setState({
            photo: e.target.files[0]
        })
    }
    render() {
        console.log(localStorage.token)
        console.log(sessionStorage.id)
        return (
            <div>
                <div className="hero-area2  slider-height2 hero-overly2 d-flex align-items-center ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center pt-50">
                                    <h2>Espace client</h2>
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
                                    <h2 className="contact-title">Se connecter</h2>
                                </div>
                                <fieldset>
                                    <form className="form-contact contact_form" noValidate="novalidate">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input className="form-control" name="subject"  type="text" onfocus="this.placeholder = ''"  placeholder="Entrer votre E-mail"/>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input className="form-control" name="subject"  type="password" onfocus="this.placeholder = ''"  placeholder="Entrer votre mot de passe"/>
                                                </div>
                                            </div>
                                        </div>
                                        <center>
                                            <div className="form-group mt-3">
                                                <button type="submit" className="button button-contactForm boxed-btn">Valider</button>
                                            </div>
                                        </center>
                                    </form>
                                </fieldset>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contenue">
                            <div className="col-12">
                                <h2 className="contact-title">Crréer un compte</h2>
                            </div>
                            <div >
                                <Formik
                                initialValues={{
                                    nom: '',
                                    prenom: '',
                                    email: '',
                                    telephone: '',
                                    password: '',
                                    photo: null
                                }}

                                onSubmit={(values) => {
                                    const data = new FormData();

                                    data.append('photoUser', this.state.photo)
                                    data.append('nom', values.nom)
                                    data.append('prenom', values.prenom)
                                    data.append('email', values.email)
                                    data.append('telephone', values.telephone)
                                    data.append('password', values.password)

                                    axios.post('users', data).then(response => {
                                        
                                        if(response.status === 200) {
                                            localStorage.setItem('token', response.data.token)     
                                            sessionStorage.setItem('id', response.data.user.id)                                       
                                        }
                                    })
                                }}
                                >
                                    <Form className="form-contact contact_form"  novalidate="novalidate">
                                        <div className="row">
                                            
                                            <div className="col-sm-12">
                                                <div className="photo" style={{padding: '10px'}}>
                                                    <img src="user.png" className="rounded mx-auto d-block" alt="..." />
                                                    <br/>
                                                    <center >
                                                        <Field name="photo"  type="file" onfocus="this.placeholder = ''" onChange={this.handleChange}/>
                                                    </center>
                                                </div>
                                                
                                            </div>
                                            <br/>
                                            <br/>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Field className="form-control valid" name="nom"  type="text" 
                                                    onfocus="this.placeholder = ''" placeholder="Entrer votre nom"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Field className="form-control valid" name="prenom"  type="text" 
                                                    onfocus="this.placeholder = ''" placeholder="Entrer votre prenom"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <Field className="form-control valid" name="email"  type="email" 
                                                    onfocus="this.placeholder = ''" placeholder="Entrer votre Email"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <Field className="form-control valid" name="telephone"  type="number" 
                                                    onfocus="this.placeholder = ''" placeholder="Entrer votre numero telephone"/>
                                                </div>
                                            </div>
                                        
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <Field className="form-control valid" name="password"  type="password" 
                                                    onfocus="this.placeholder = ''" placeholder="Entrer votre mot de passe"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input className="form-control valid" name="prenom"  type="password" 
                                                    onfocus="this.placeholder = ''" placeholder="Entrer votre mot de passe de confirmation"/>
                                                </div>
                                            </div>
                                        </div>
                                        <center>
                                            <div className="form-group mt-3">
                                                <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                                            </div>
                                        </center>
                                    </Form>
                                </Formik>
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

export default (Espace_client);


