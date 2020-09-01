import React, { Component } from 'react'

const stylesDisplay = {
  display: 'block'
};

const stylesOpacity = {
  opacity: 1
};

export class Footer extends Component {
    render() {
        return (
            <div>
             <footer>
            <div className="footer-agileits-w3layouts">
          <div className="container">
            <div className="btm-logo-w3ls">
              <h2><a href="index.html"><span className="fa fa-check-square-o" aria-hidden="true"></span>Institute</a></h2>
            </div>
            <div className="subscribe-w3ls">
              <h6>Let us inform you about everything important directly.</h6>
              <form action="#" method="post">
                <div className="col-md-8 col-sm-8 col-xs-8 input-flds-w3-agile">
                  <input type="email" name="Email" placeholder="Email" required=""/>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4 input-flds-w3-agile">
                  <input type="submit" value="Subscribe"/>
                </div>
                <div className="clearfix"> </div>
              </form>
            </div>
            <div className="social-icons-agileits">
              <ul>
                <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
              </ul>
            </div>

            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="copyright-w3layouts">
          <div className="container">
            <p>&copy; 2020 Institute . All Rights Reserved | Design by <a href="institutes"> Institutes </a></p>
          </div>
        </div>
        <a href="#home" className="scroll" id="toTop" style={stylesDisplay}> 
        <span id="toTopHover" style={stylesOpacity}> </span></a>
  
      </footer>
            </div>
        )
    }
}

export default Footer
