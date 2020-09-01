import React, { Component } from 'react'
import {Link} from "react-router-dom"
import HeaderSlider from "./HeaderSlider"

const textArray = ['Education Needs Complete Solution', 'The Best Learning Institute'];
export class Header extends Component {
    // state = this.props.bannerCSS;
    constructor() {
        super();
        this.state = { 
            textIdx: 0,
            bannerName: "banner",
            HeaderSliderHide: true,
            textThatChanges:""
         };
      }

      componentDidMount() {
        this.timeout = setInterval(() => {
          let currentIdx = this.state.textIdx;
          this.setState({ textIdx: currentIdx + 1 });
        }, 2500);

      
      }

      componentWillMount(){
        console.log(window.location.pathname)
        if (window.location.pathname ==="/")        {
            this.setState({bannerName:"banner"})
            this.setState({HeaderSliderHide: false})
            this.setState({textThatChanges:textArray[this.state.textIdx % textArray.length]})
        }
        else{
            this.setState({bannerName:"banner inner-banner"})
            this.setState({HeaderSliderHide: true})
        }
      }
      componentDidUnmount() {
        clearInterval(this.timeout);
      }

    render() {
        let textThatChanges = textArray[this.state.textIdx % textArray.length];
        console.log(this.state.bannerName)
        
        return (
            <div className={this.state.bannerName} id="home">
           {/* //</div>  <div className="banner" id="home" > ***/}
            <div className="container">
                <header>
                    <div className="header-bottom-w3layouts">
                        <div className="main-w3ls-logo" >
                            <h1><a href="/"><span className="fa fa-check-square-o" aria-hidden="true"></span>IOT Study</a></h1>
                        </div>
                        <nav className="navbar navbar-default">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"                                    aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li><Link  className="active"  to="/">Home</Link ></li>
                                    <li><Link to="/about" >About</Link></li>
                                    <li><Link to="/courses" >Courses</Link></li>
                                    <li><Link to="/institutes" >Institutes</Link></li> 
                                    {/* <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages <b className="caret"></b></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="icons.html">Web Icons</a></li>
                                            <li><a href="typography.html">Typography</a></li>
                                        </ul>
                                    </li> */}
                                     <li><Link to="contact" >Contact</Link></li> 
                                     {/* <li><a href="/" className="active" > Home </a></li>
                                     <li><a href="/courses"> Courses </a></li>
                                     <li><a href="/institutes"> Institutes </a></li>
                                     <li><a href="/about"> About </a></li>
                                     <li><a href="/contact"> Contact </a></li> */}
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
                    <div >
                        <HeaderSlider HeaderSlider={this.state.HeaderSliderHide} textThat ={this.state.textThatChanges} />
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
        )
    }
}

export default Header
