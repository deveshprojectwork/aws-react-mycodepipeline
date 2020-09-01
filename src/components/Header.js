import React, { Component } from 'react'
import {Link} from "react-router-dom"

export class Header extends Component {
    // state = this.props.bannerCSS;

    render() {
        // banner inner-banner
        console.log("INNERBANNER2"+this.props.bannerCSS);
        // console.log(window.location.pathname)
        // if ("/about")
        // {
        //     alert("about page")
        // }
        // else
        // {
        //     alert("not an home page")
        // }
        // let {bannerCSS} = this.props.bannerCSS
        // if (bannerCSS!= null || bannerCSS!="")
        // {
        //     bannerCSS = "banner";
        // }
        // else{
        //     bannerCSS = null;
        // }
        return (
            // <div className="banner inner-banner" id="home">
            <div className="banner" id="home" >
            <div className="container">
                <header>
                    <div className="header-bottom-w3layouts">
                        <div className="main-w3ls-logo">
                            <h1><a href="/"><span className="fa fa-check-square-o" aria-hidden="true"></span>Institute</a></h1>
                        </div>
                        <nav className="navbar navbar-default">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                                    aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
    
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    {/* <li><Link  className="active"  to="/">Home</Link ></li>
                                    <li><Link to="/about" >About</Link></li>
                                    <li><Link to="/courses" >Courses</Link></li>
                                    <li><Link to="/institutes" >Institutes</Link></li> */}
                                    {/* onClick={() => window.location.reload()} */}
                                    {/* <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages <b className="caret"></b></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="icons.html">Web Icons</a></li>
                                            <li><a href="typography.html">Typography</a></li>
                                        </ul>
                                    </li> */}
                                    {/* <li><Link to="contact" >Contact</Link></li>  */}
                                    <li><a href="/" className="active" > Home </a></li>
                                     <li><a href="/courses"> Courses </a></li>
                                     <li><a href="/institutes"> Institutes </a></li>
                                     <li><a href="/about"> About </a></li>
                                     <li><a href="/contact"> Contact </a></li>
                                </ul>
    
                            </div>
    
                        </nav>
                        <div className="search-agile-bar">
                            <div className="cd-main-header">
                                <ul className="cd-header-buttons">
                                    <li><a className="cd-search-trigger" href="#cd-search"> <span></span></a></li>
                                </ul>
                            </div>
                            <div id="cd-search" className="cd-search">
                                <form action="#" method="post">
                                    <div className="agileits-search-field">
                                        <input name="Search" type="search" placeholder="Click enter after typing..."/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </header>
                <div className="banner-text">
                    <div className="callbacks_container">
                        <ul className="rslides" id="slider3">
                            <li>
                                <div className="slider-info">
                                    <h3>It is never too late to Study</h3>
                                    <p>Education Needs Complete Solution</p>
                                    <a href="about">About Us</a>
                                </div>
                            </li>
                            <li>
    
                                <div className="slider-info">
                                    <h3>The best learning institute</h3>
                                    <p>Successful career starts with good training</p>
                                    <a href="about
                                    ">About Us</a>
                                </div>
                            </li>
    
                        </ul>
    
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
        )
    }
}

export default Header
