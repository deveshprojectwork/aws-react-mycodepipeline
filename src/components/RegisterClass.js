import React, { Component } from "react";
import "./styles.css";

class RegisterClass extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      course: ""
    };
  }
  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleChangeCountry1 = (event) => {
    alert(JSON.stringify(event.target.value));
    this.setState({ course: event.target.value });
  };

  handleSubmit = () => {
    var data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      course: this.state.course
    };
    alert(JSON.stringify(data));
    // fetch(url,{
    //     method:'POST',
    //     headers:{
    //         'Accept':'application/json',
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify(data)
    // })
    // .then(this.props.history.push('/login'))
  };
  render() {
    return (
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">Register</div>
          <div className="panel-body">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.handleChangeName}
              />
              <p></p>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                value={this.state.Password}
                onChange={this.handleChangePassword}
              />
            </div>
            <div className="fields">
              <select
                id="country1"
                value={this.state.country1}
                onChange={this.handleChangeCountry1}
                class="frm-field required sect" name="classtime" >
                <option value="">Select course</option>
                <option value="Office">Office</option>
                <option value="Web design">Web design</option>
                <option value="Web development">Web development</option>
                <option value="Net working">Net working</option>
                <option value="Linux">Linux</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.handleSubmit}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterClass;
