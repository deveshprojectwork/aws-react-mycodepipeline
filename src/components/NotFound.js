import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends Component {
    render() {
        return (
            <div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="main">
                <h1>404</h1>
                <p> Ooops, Something Goes Wrong...<br/>That's a trouble?</p>
                <button type="button"><Link to="/">Go back</Link></button>
                <div class="copyright">
                            <p>© 2018 Stamp 404 Page Widget. All rights reserved | Design by <a href="http://w3layouts.com">W3layouts</a></p>
                        </div>
                </div>
            </div>
        )
    }
}

export default NotFound
