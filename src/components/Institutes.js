import React, { Component } from 'react'

export class Institutes extends Component {
    constructor(){
    super();
    }
    state = {
        institutes:[
        {instutuName: "Institute", institutesInfo: "We offer great variety of individual and group programs. Our clients and our experience proves that the following courses can literally change your life!",
        images:"images/g1.jpg" },
        {instutuName: "Institute", institutesInfo: "We offer great variety of individual and group programs. Our clients and our experience proves that the following courses can literally change your life!",
        images:"images/g2.jpg"},
        {instutuName: "Institute", institutesInfo: "We offer great variety of individual and group programs. Our clients and our experience proves that the following courses can literally change your life!",
         images:"images/g3.jpg" },
         {instutuName: "Institute", institutesInfo: "We offer great variety of individual and group programs. Our clients and our experience proves that the following courses can literally change your life!",
         images:"images/g4.jpg" },
         {instutuName: "Institute", institutesInfo: "We offer great variety of individual and group programs. Our clients and our experience proves that the following courses can literally change your life!",
         images:"images/g5.jpg" },
         {instutuName: "Institute", institutesInfo: "We offer great variety of individual and group programs. Our clients and our experience proves that the following courses can literally change your life!",
         images:"images/g6.jpg" },
         {instutuName: "Institute", institutesInfo: "We offer great variety of individual and group programs. Our clients and our experience proves that the following courses can literally change your life!",
         images:"images/g7.jpg" },
         {instutuName: "Institute", institutesInfo: "We offer great variety of individual and group programs. Our clients and our experience proves that the following courses can literally change your life!",
         images:"images/g8.jpg" },
         {instutuName: "Institute", institutesInfo: "We offer great variety of individual and group programs. Our clients and our experience proves that the following courses can literally change your life!",
         images:"images/g9.jpg" }
        ]
    }


    // componentDidMount()
    // {
    //     this.setState({localInstitute:this.state.institutes})
    // }
    render() {
        const {localInstitute} = this.state;
        console.log(localInstitute)
        return (
            <div>
               <div className="gallery">
                    <div className="container">
                        <h5 className="main-w3l-title">Our Institutes</h5>
                        {this.state.institutes.map((item) =>
                        <div className="col-md-4 gallery-columns">
                            <div className="gal_grid_outer">
                                <a title={item.institutesInfo}  href={item.images}>
                                    <div className="gal_grid_outer1">
                                        <img src={item.images} alt=" " className="img-responsive" />
                                        <div className="gallery_grid_pos">
                                            <h3>{item.instutuName}</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        )}
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Institutes
