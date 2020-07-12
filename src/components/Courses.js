import React, { Component } from 'react'

export class Courses extends Component {
    constructor(){
    super();
    this.state = {
        courses : [
            {cname: "PHP Web Development", cimages: "images/t2.jpg", spam: 20, ctrainername:"Trainer A1", courseinfo:"Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.",
             batchStartDate: "1 Feb 2018"},
             {cname: ".NET Programming", cimages: "images/t3.jpg", spam: 30,ctrainername:"Trainer A2", courseinfo:"Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.",
             batchStartDate: "15 Jan 2018"},
             {cname: "JavScript / Ajax",  cimages: "images/t4.jpg", spam: 40, ctrainername:"Trainer A3",courseinfo:"Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.",
             batchStartDate: "15 Feb 2018"},
             {cname: "Web Designing",  cimages: "images/t3.jpg",spam: 50, ctrainername:"Trainer A4",courseinfo:"Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.",
             batchStartDate: "1 Mar 2018"},
             {cname: "Logo/Icons Designing",  cimages: "images/t4.jpg", spam: 40, ctrainername:"Trainer A5",courseinfo:"Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.",
             batchStartDate: "1 Jan 2018"},
             {cname: "Print Designing",  cimages: "images/t2.jpg", spam: 20, ctrainername:"Trainer A6",courseinfo:"Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.",
             batchStartDate: "20 Jan 2018"},
        ]
        
    };
}

    render() {
        console.log(this.state)
        // const {cources_name} = this.state.;
        return (
            <div class="courses">
                {/* <h1>COURSES name is {this.state.cname}</h1> */}

                {/* <table>
                    <thead><td>Name</td></thead>
                    {this.state.courses.map((obj)=>
                        <tr><td>{obj.cname}</td></tr>
                    )}                    
                </table> */}


                <div class="container">
                <h5 class="main-w3l-title">Courses</h5>
                {this.state.courses.map((item) =>
                <div className="col-md-4 courses-info">
                            <h5>{item.cname}</h5>
                            <div className="c-image">
                                <img src={item.cimages} alt=" " className="img-responsive"/>
                                <h6>{item.ctrainername}</h6>
                                <div className="clearfix"></div>
                            </div>
                            <p className="numbers"><span>{item.spam}</span> Students</p>
                            <p className="paragraph-agileinfo">{item.courseinfo}</p>
                            <p className="batch">Batch Starts from <span>{item.batchStartDate}</span></p>
                </div>
                )}
                </div>

               
            </div>
        )
    }
}

export default Courses
