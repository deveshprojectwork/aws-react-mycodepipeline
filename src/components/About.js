import React, { Component } from 'react'
import Header from "./Header"

export class About extends Component {
    render() {
        return (
            <div>
				 <Header bannerCSS="banner inner-banner"  id="home"/> 
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
				<div className="about-mid">
					<div className="mid-info">
						<h3 className="subheading-wthree white-clr">Out Courses</h3>
						<p className="paragraph-agileinfo white-clr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed odio consequat, tristique elit sed, molestie nulla.</p>
						<ul>
							<li><span className="fa fa-asterisk" aria-hidden="true"></span>consectetur adipiscing elit.</li>
							<li><span className="fa fa-asterisk" aria-hidden="true"></span>Lorem ipsum dolor sit amet</li>
							<li><span className="fa fa-asterisk" aria-hidden="true"></span>Etiam sed odio consequat</li>
						</ul>
						<a href="courses.html">Find out more</a>
					</div>
					<div className="mid-info">
						<h3 className="subheading-wthree white-clr">Out Trainers</h3>
						<p className="paragraph-agileinfo white-clr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed odio consequat, tristique elit sed, molestie nulla.</p>
						<ul>
							<li><span className="fa fa-asterisk" aria-hidden="true"></span>consectetur adipiscing elit.</li>
							<li><span className="fa fa-asterisk" aria-hidden="true"></span>Lorem ipsum dolor sit amet</li>
							<li><span className="fa fa-asterisk" aria-hidden="true"></span>Etiam sed odio consequat</li>
						</ul>
						<a href="#team" className="scroll">Meet our trainers</a>
					</div>
					<div className="mid-info">
						<h3 className="subheading-wthree white-clr">Admission process</h3>
						<p className="paragraph-agileinfo white-clr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed odio consequat, tristique elit sed, molestie nulla.</p>
						<ul>
							<li><span className="fa fa-asterisk" aria-hidden="true"></span>consectetur adipiscing elit.</li>
							<li><span className="fa fa-asterisk" aria-hidden="true"></span>Lorem ipsum dolor sit amet</li>
							<li><span className="fa fa-asterisk" aria-hidden="true"></span>Etiam sed odio consequat</li>
						</ul>
						<a href="index.html">Get enrolled</a>
					</div>
				</div>
				<div className="team-section" id="team">
					<div className="container">
						<h5 className="main-w3l-title">Our Trainers</h5>
						<div className="col-md-6 team-left">
							<p className="paragraph-agileinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis tristique est, et egestas odio. Mauris ac tristique
								arcu, sed interdum risus.Integer quis tristique est, et egestas odio.</p>
							<p className="paragraph-agileinfo">Mauris ac tristique arcu, sed interdum risus.Integer quis tristique est, et egestas odio. Mauris ac tristique arcu, sed
								interdum risus.</p>
							<p className="paragraph-agileinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis tristique est, et egestas odio. Mauris ac tristique
								arcu, sed interdum risus.Integer quis tristique est, et egestas odio.</p>
							<p className="paragraph-agileinfo">Mauris ac tristique arcu, sed interdum risus.Integer quis tristique est, et egestas odio. Mauris ac tristique arcu, sed
								interdum risus.</p>
						</div>
						<div className="col-md-6 team-right">
							<div className="col-md-6 col-sm-6 col-xs-6 team-grid">
								<img className="team-img img-responsive" src="images/t1.jpg" alt="" /> 
								<h6>Andrew Bert</h6>
								<div className="social-icons-agileits">
									<ul>
										<li><a href="#facebook"><span className="fa fa-facebook"></span></a></li>
										<li><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
										<li><a href="#google"><span className="fa fa-google-plus"></span></a></li>
									</ul>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="col-md-6 col-sm-6 col-xs-6 team-grid t2">
								<img className="team-img img-responsive" src="images/t2.jpg" alt="" /> 
								<h6>Mecan smith</h6>
								<div className="social-icons-agileits">
									<ul>
										<li><a href="#facebook"><span className="fa fa-facebook"></span></a></li>
										<li><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
										<li><a href="#google"><span className="fa fa-google-plus"></span></a></li>
									</ul>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="col-md-6 col-sm-6 col-xs-6 team-grid">
								<img className="team-img img-responsive" src="images/t4.jpg" alt="" /> 
								<h6>Jack Bravo</h6>
								<div className="social-icons-agileits">
									<ul>
										<li><a href="#facebook"><span className="fa fa-facebook"></span></a></li>
										<li><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
										<li><a href="#google"><span className="fa fa-google-plus"></span></a></li>
									</ul>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="col-md-6 col-sm-6 col-xs-6 team-grid">
								<img className="team-img img-responsive" src="images/t3.jpg" alt="" /> 
								<h6>Bernard Smith</h6>
								<div className="social-icons-agileits">
									<ul>
										<li><a href="#facebook"><span className="fa fa-facebook"></span></a></li>
										<li><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
										<li><a href="#google"><span className="fa fa-google-plus"></span></a></li>
									</ul>
								</div>
								<div className="clearfix"> </div>
							</div>
						</div>
					</div>
				</div>
            </div>
        )
    }
}

export default About
