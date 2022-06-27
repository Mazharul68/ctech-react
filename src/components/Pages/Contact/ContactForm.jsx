import React from 'react';
import { useEffect } from 'react';
import { userService } from '../../../services/UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ContactForm = () => {

    const navigate = useNavigate();
    const ContactForm = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;
        let data = {
            name, email, subject, message
        }

        userService.getUserMessage(data)
            .then(res => res.json())
            .then(result => {
                toast.success('Your Message Successfully send We will contact shortly with us');
                navigate('/contact')
            })
        event.target.name.value = ""
        event.target.email.value = ""
        event.target.subject.value = ""
        event.target.message.value = ""
    }
    return (
        <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="contact-form">
                <div className="row">
                    <form className="contact-form" onSubmit={ContactForm}>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <input type="text" name="name" className="form-control" placeholder="Name" required />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <input type="email" className="email form-control" placeholder="Email" name='email' required />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <input type="text" className="form-control" placeholder="Subject" name='subject' required />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <textarea rows={7} placeholder="Massage" className="form-control" name='message' required />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                            <button type="submit" className="add-btn contact-btn">Send Message</button>
                            <div id="msgSubmit" className="h3 text-center hidden" />
                            <div className="clearfix" />
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;