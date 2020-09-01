import React, { Component } from 'react'
import Header from "./Header"

export class Contact extends Component {
    render() {
        return (
            <div>          
                <Header bannerCSS="banner inner-banner" />        
              <div className="contact-page">
                    <div className="container">
                        <h5 className="main-w3l-title">Get in touch</h5>
                        <div className="form-bg">
                            <form action="#" method="post">
                                <div className="col-md-6 contact-fields">
                                    <input type="text" name="Name" placeholder="Name" required=""/>
                                </div>
                                <div className="col-md-6 contact-fields">
                                    <input type="email" name="Email" placeholder="Email" required=""/>
                                </div>
                                <div className="contact-fields">
                                    <input type="text" name="Subject" placeholder="Subject" required=""/>
                                </div>
                                <div className="contact-fields">
                                    <textarea name="Message" placeholder="Message" required=""></textarea>
                                </div>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                        <div className="contact-maps">
                            <h5 className="main-w3l-title">Find us on the map</h5>
                            <div id="horizontalTab">
                                <ul className="resp-tabs-list">
                                    <li>
                                        Address 1
                                    </li>
                                    <li>
                                        Address 2
                                    </li>
                                    <li>
                                        Address 3
                                    </li>
                                    <li>
                                        Address 4
                                    </li>
                                </ul>
                                <div className="resp-tabs-container">
                                    <div className="tab1">
                                        <div className="col-md-5 add-left">
                                            <p className="paragraph-agileinfo"><span>Location : </span>550 LaGuardia Pl, New York, NY 10012, USA</p>
                                            <p className="paragraph-agileinfo"><span>Call Us : </span>000-568-3214</p>
                                            <p className="paragraph-agileinfo"><span>Email : </span><a href="mailto:info@example.com">info@example.com</a></p>
                                        </div>
                                        <div className="col-md-7 add-right">
                                            <iframe  title="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10171.143717162497!2d-73.99510450880028!3d40.72023723426282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590485a57bab%3A0xc30a1a20d5c453f4!2sD%C5%8C%2C+Cookie+Dough+Confections!5e0!3m2!1sen!2sin!4v1512641855744"></iframe>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>

                                    <div className="tab2">
                                        <div className="col-md-5 add-left">
                                            <p className="paragraph-agileinfo"><span>Location : </span>45 Rockefeller Plaza, New York, NY 10111, USA</p>
                                            <p className="paragraph-agileinfo"><span>Call Us : </span>000-953-456</p>
                                            <p className="paragraph-agileinfo"><span>Email : </span><a href="mailto:info@example.com">info@example.com</a></p>
                                        </div>
                                        <div className="col-md-7 add-right">
                                            <iframe  title="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20335.70063503884!2d-73.99748627450514!3d40.741786138002865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fecf664df5%3A0x33d224a0d5dacca2!2sRockefeller+Center!5e0!3m2!1sen!2sin!4v1512641910229"></iframe>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="tab3">
                                        <div className="col-md-5 add-left">
                                            <p className="paragraph-agileinfo"><span>Location : </span>32nd Pl, Long Island City, NY 11101, USA</p>
                                            <p className="paragraph-agileinfo"><span>Call Us : </span>000-860-568</p>
                                            <p className="paragraph-agileinfo"><span>Email : </span><a href="mailto:info@example.com">info@example.com</a></p>
                                        </div>
                                        <div className="col-md-7 add-right">
                                            <iframe title="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86077.10926901785!2d-73.97583160860489!3d40.8209002394618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80a26a8cc62f2aa5!2sCity+Ice+Pavilion!5e0!3m2!1sen!2sin!4v1512641992727"></iframe>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="tab4">
                                        <div className="col-md-5 add-left">
                                            <p className="paragraph-agileinfo"><span>Location : </span>11 Dorrance St, Providence, RI 02903, USA</p>
                                            <p className="paragraph-agileinfo"><span>Call Us : </span>000-809-6193</p>
                                            <p className="paragraph-agileinfo"><span>Email : </span><a href="mailto:info@example.com">info@example.com</a></p>
                                        </div>
                                        <div className="col-md-7 add-right">
                                            <iframe  title="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47576.40355278206!2d-71.45619986572248!3d41.81698718199209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4451158a3cc03%3A0x3b88861277135d60!2sProvidence+Biltmore!5e0!3m2!1sen!2sin!4v1512642068206"></iframe>
                                        </div>
                                        <div className="clearfix"></div>
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

export default Contact
