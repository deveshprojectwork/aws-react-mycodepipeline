import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="main">
                <h1>404</h1>
                <p> Ooops, Something Goes Wrong...<br/>That's a trouble?</p>
                <button type="button"><Link to="/">Go back</Link></button>
                <div className="copyright">
                            <p>© 2020 Stamp 404 Page Widget. All rights reserved | Design by <a href="#">Institute</a></p>
                        </div>
                </div>
            </div>
        )
    }
}

export default NotFound
