import React, { Component } from 'react'
import Header from "./Header"
export class Home extends Component {
    render() {
        return (
            <div>
          <Header bannerCSS="banner inner-banner" />
          {/* <Header  /> */}
          <div className="about-section" id="about">
          <div className="container">
            <h5 className="main-w3l-title">About Us</h5>
            <div className="about-top">
              <h3 className="subheading-wthree">Something About Us</h3>
              <p className="paragraph-agileinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis tristique est, et egestas odio. Mauris ac tristique
                arcu, sed interdum risus.Integer quis tristique est, et egestas odio. Mauris ac tristique arcu, sed interdum risus.
              </p>
            </div>
            <div className="about-main">
              <div className="about-w3-left">
                <div className="about-img">
                </div>
                <div className="about-bottom">
                  <p className="paragraph-agileinfo white-clr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis tristique est, et egestas odio. Mauris ac tristique.</p>
                </div>
              </div>

              <div className="about-w3ls-right">
                <h3 className="subheading-wthree">Welcome to our Institute</h3>
                <p className="paragraph-agileinfo">We offer great variety of individual and group programs. Our clients' and our experience proves that the following courses
                  can literally change your life!</p>
                <ul>
                  <li><span className="fa fa-check-square-o" aria-hidden="true"></span>See our best skills</li>
                  <li><span className="fa fa-check-square-o" aria-hidden="true"></span>Learn courses online</li>
                  <li><span className="fa fa-check-square-o" aria-hidden="true"></span>Best trainers</li>
                  <li><span className="fa fa-check-square-o" aria-hidden="true"></span>Student Guidance</li>
                  <li><span className="fa fa-check-square-o" aria-hidden="true"></span>Learn With Fun</li>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="container">
            <h5 className="main-w3l-title white-clr">Reasons to Choose Us</h5>
            <div className="stats_inner">
              <div className="col-md-4 col-sm-4 stat-grids">
                <p className="counter">2,879</p>
                <div className="stats-text">
                  <h3>Students Successive</h3>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 stat-grids">
                <p className="counter">953</p>
                <div className="stats-text">
                  <h3>Courses</h3>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 stat-grids">
                <p className="counter">1,546</p>
                <div className="stats-text">
                  <h3>Competitions Won</h3>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        <div className="services-section">
          <div className="services-grids">
            <div className="services-img1"></div>
            <div className="services-info top-services">
              <h3 className="subheading-wthree">Daily Life Of Coaching At Training Institute</h3>
              <p className="paragraph-agileinfo">We offer great variety of individual and group programs. Our clients' and our experience proves that the following courses</p>
              <ul>
                <li><span className="fa fa-check-square-o" aria-hidden="true"></span>Online Coaching</li>
                <li><span className="fa fa-check-square-o" aria-hidden="true"></span>1 to 1 Coaching</li>
                <li><span className="fa fa-check-square-o" aria-hidden="true"></span>Guidance Coaching</li>
                <li><span className="fa fa-check-square-o" aria-hidden="true"></span>Group Coaching</li>
              </ul>
              <div className="header-top">
                <h3 className="subheading-wthree white-clr">Let's Register Now</h3>
                <span>Get Enrolled & Start better future with us!</span>
                <ul className="form-buttons">
                  <li><a href="#aa" data-toggle="modal" data-target="#myModal3"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Register</a></li>
                </ul>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
          <div className="services-grids">
            <div className="services-info bottom-services">
              <h3 className="subheading-wthree">Our Packages</h3>
              <p className="paragraph-agileinfo">Vestibulum convallis odio sagittis fermentum accumsan. Maecenas sagittis tortor ut nisl maximus, eu dictum dolor blanditEtiam.</p>
              <div className="serv-inner1">
                <div className="serv-left">
                  <h6><span>$ 10	/Month</span>Starter</h6>
                  <ul>
                    <li>One Day Trial</li>
                    <li>Limited Courses</li>
                    <li>No Ebook</li>
                    <li>Limited Registered User</li>
                  </ul>
                </div>
                <div className="serv-right">
                  <h6><span>$ 20	/Month</span>Basic</h6>
                  <ul>
                    <li>One Day Standard Access</li>
                    <li>Limited Courses</li>
                    <li>View Only Ebook</li>
                    <li>Unlimited Registered User</li>
                  </ul>
                </div>
              </div>
              <div className="serv-inner2">
                <div className="serv-left">
                  <h6><span>$ 30	/Month</span>Premium</h6>
                  <ul>
                    <li>One Year Premium Access</li>
                    <li>Unlimited Courses</li>
                    <li>Free Ebook Downloads</li>
                    <li>Unlimited Registered User</li>
                  </ul>
                </div>
                <div className="serv-right">
                  <h6><span>$ 40	/Month</span>Advance</h6>
                  <ul>
                    <li>Life Time Access</li>
                    <li>Unlimited All Courses</li>
                    <li>Free Ebook Downloads</li>
                    <li>Unlimited Registered User</li>
                  </ul>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="services-img2"></div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="modal fade" id="myModal3" tabindex="-1" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>

                <div className="signin-form profile">
                  <h3 className="register-title">Register</h3>
                  <div className="login-form">
                    <form action="#" method="post">
                      <div className="fields-main">
                        <div className="fields">
                          <input type="text" name="name" placeholder="Username" required=""/>
                        </div>
                        <div className="fields">
                          <input type="email" name="email" placeholder="Email" required=""/>
                        </div>
                      </div>
                      <div className="fields-main">
                        <div className="fields">
                          <input type="text" name="Number" placeholder="Number" required=""/>
                        </div>
                        <div className="fields">
                          <input type="text" name="Address" placeholder="Address" required=""/>
                        </div>
                      </div>
                      <div className="fields-main">
                        <div className="fields">
                          <input type="text" name="Last/Current educational status" placeholder="Last/Current educational status" required=""/>
                        </div>
                        <div className="fields">
                          <input type="text" name="Website" placeholder="Website(if any)" required=""/>
                        </div>
                      </div>
                      <div className="fields">
                        <select id="country" onchange="change_country(this.value)" className="frm-field required sect">
                          <option value="">Select course</option>
                          <option value="">Office</option>
                          <option value="">Web design</option>
                          <option value="">Web development</option>
                          <option value="">Net working</option>
                          <option value="">Linux</option>
                        </select>
                      </div>
                      <div className="fields">
                        <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
                          <option value="">Class time</option>
                          <option value="">Morning</option>
                          <option value="">Evening</option>
                          <option value="">Custom</option>
                        </select>
                      </div>
                      <div className="radio-section">
                        <h6>Training Option</h6>
                        <ul className="radio-buttons">
                          <li>
                            <input type="radio" id="a-option" name="selector1"/>
                            <label for="a-option">Full day</label>
                            <div className="check"></div>
                          </li>
                          <li>
                            <input type="radio" id="b-option" name="selector1"/>
                            <label for="b-option">Half day</label>
                            <div className="check">
                              <div className="inside"></div>
                            </div>
                          </li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                      <input type="submit" value="Submit" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-section">
          <div className="container">
            <h5 className="main-w3l-title">Testimonials</h5>
            <section className="slider">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <div className="testimonial-agileits-w3layouts">
                      <p>Sed tempus vestibulum lacus blandit faucibus. Nunc imperdiet, diam nec rhoncus ullamcorper, nisl nulla suscipit ligula,
                        at imperdiet urna. </p>
                      <img src="images/t1.jpg" alt=" " className="img-responsive"/>
                      <div className="test-name">
                        <h5>Julia Rose</h5>
                        <div className="rating-icons">
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star" aria-hidden="true"></span>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </li>
                  <li>
                    <div className="testimonial-agileits-w3layouts">
                      <p>Sed tempus vestibulum lacus blandit faucibus. Nunc imperdiet, diam nec rhoncus ullamcorper, nisl nulla suscipit ligula,
                        at imperdiet urna. </p>
                      <img src="images/t2.jpg" alt=" " className="img-responsive"/>
                      <div className="test-name">
                        <h5>Jahnatan Smith</h5>
                        <div className="rating-icons">
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star-o" aria-hidden="true"></span>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </li>
                  <li>
                    <div className="testimonial-agileits-w3layouts">
                      <p>Sed tempus vestibulum lacus blandit faucibus. Nunc imperdiet, diam nec rhoncus ullamcorper, nisl nulla suscipit ligula,
                        at imperdiet urna. </p>
                      <img src="images/t3.jpg" alt=" " className="img-responsive"/>
                      <div className="test-name">
                        <h5>Rosalind Cloer</h5>
                        <div className="rating-icons">
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star-o" aria-hidden="true"></span>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </li>
                  <li>
                    <div className="testimonial-agileits-w3layouts">
                      <p>Sed tempus vestibulum lacus blandit faucibus. Nunc imperdiet, diam nec rhoncus ullamcorper, nisl nulla suscipit ligula,
                        at imperdiet urna. </p>
                      <img src="images/t4.jpg" alt=" " className="img-responsive"/>
                      <div className="test-name">
                        <h5>Amie Bublitz</h5>
                        <div className="rating-icons">
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star" aria-hidden="true"></span>
                          <span className="fa fa-star-o" aria-hidden="true"></span>
                          <span className="fa fa-star-o" aria-hidden="true"></span>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
   
                
            </div>
        )
    }
}

export default Home
