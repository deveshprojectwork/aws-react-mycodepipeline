import React from 'react'

function HeaderSlider(props) {
    return (
        <div>
            {(props.HeaderSlider!=true?
            <ul>
                <li>
                    <div className="slider-info" id="slide">
                        <p>
                            It Is Never Too Late To Study.<br></br> 
                            <span><h3>{props.textThat}</h3></span>
                        </p>
                        <a href="about">About Us</a>
                    </div>
                    {/* <div className="slider-info">
                        <h3>It is never too late to Study</h3>
                        <p>Education Needs Complete Solution</p>
                        <a href="about">About Us</a>
                    </div> */}
                </li>
                {/* <li>

                    <div className="slider-info">
                        <h3>The best learning institute</h3>
                        <p>Successful career starts with good training</p>
                        <a href="about
                        ">About Us</a>
                    </div>
                </li> */}
            </ul>:"")}
        </div>
    )
}

export default HeaderSlider
