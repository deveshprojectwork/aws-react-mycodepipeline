import React from 'react'
import {useForm} from "react-hook-form"
import { postAdminRegister } from '../config/Myser';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";


const schema = yup.object().shape({
  name : yup.string().required(),
  email: yup.string().required(),
  Number: yup.number().positive().integer().required(),
})
function Register() {
  const { register, handleSubmit, watch, errors  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data,event) => {
    alert(JSON.stringify(data));
   
    event.preventDefault();
    postAdminRegister(data)
    .then(res=>
       {
        console.log(res)
        console.log(res.data)
         if(res.data.err===0)
         {
            alert(res.data)
            //  localStorage.setItem('uid',res.data.uid);
            //  this.props.history.push('/dashboard')
         }
         if(res.data.err===1)
         {
             this.setState({errMsg:res.data.err})
         }
       })
  };
  
  console.log(watch("example")); // watch input value by passing the name of it


  //   const [values,setValues]=useState({name:'',email:'',Number:'',Address:'',LCState:'',Website:'',errMsg:''});
  //   const [mycourse,setCourse]=useState({course:''})

  //   const handler =  (e) =>{
  //       const {name, value} = e.target;
  //       setValues({...values,[name]:value});
  //   }

    // const postRegister=(e)=>{
    //    e.preventDefault();
    // //    console.log(values.name)
    // //     console.log(mycourse.course)
    // }
    
    return (
        <div>
            <div className="signin-form profile" >
                  <h3 className="register-title">Registerrrr</h3>
                  <div className="login-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="fields-main">
                        <div className="fields">
                          <input type="text" name="name" placeholder="Username" ref={register({ required: true })} />
                          {/* {errors.email && <span>This field is required</span>} */}
                          <p>{errors.name?.message}</p>
                        </div>
                        <div className="fields">
                          <input type="email" name="email" placeholder="Email"  ref={register({ required: true, maxLength: 50  })} />
                          {/* {errors.email && <span>This field is required</span>} */}
                          <p>{errors.email?.message}</p>
                        </div>
                      </div>
                      <div className="fields-main">
                        <div className="fields">
                          <input type="text" name="Number" placeholder="Number"  ref={register({ required: true, maxLength: 10,min: 8  })}/>
                          <p>{errors.Number?.message}</p>
                        </div>
                        <div className="fields">
                          <input type="text" name="Address" placeholder="Address"  ref={register}/>
                        </div>
                      </div>
                      <div className="fields-main">
                        <div className="fields">
                          <input type="text" name="LCState" placeholder="Last/Current educational status"  ref={register}/>
                        </div>
                        <div className="fields">
                          <input type="text" name="Website" placeholder="Website(if any)"  ref={register}/>
                        </div>
                      </div>
                     <div className="fields">
                        <select id="country1"  class="frm-field required sect"  name="course"  name="classtime"  ref={register}>
                                    <option value="">Select course</option>
                                    <option value="Office">Office</option>
                                    <option value="Web design">Web design</option>
                                    <option value="Web development">Web development</option>
                                    <option value="Net working">Net working</option>
                                    <option value="Linux">Linux</option>
                          </select>
                        </div>
                      <div className="fields">
                        <select id="country1"  class="frm-field required sect"  name="classtime" ref={register}>
                          <option value="">Class time</option>
                          <option value="Morning">Morning</option>
                          <option value="Evening">Evening</option>
                          <option value="Evening">Evening</option>
                        </select>
                      </div> 
                      <div className="fields">
                        <select  id="country1"  class="frm-field required sect"   name="gender" ref={register}  >
                          <option value="female">female</option>
                          <option value="male">male</option>
                          <option value="other">other</option>
                        </select>
                      
                      </div> 
                      <div class="radio-section">
                        <h6>Training Option</h6>
                        <ul class="radio-buttons">
                          <li>
                            <input type="radio" id="a-option" name="trainingOption" ref={register} value="Full day" />
                            <label for="a-option">Full day</label>
                            <div class="check"></div>
                          </li>
                          <li>
                            <input type="radio" id="b-option" name="trainingOption" ref={register} value="Half day" />
                            <label for="b-option">Half day</label>
                            <div class="check">
                              <div class="inside"></div>
                            </div>
                          </li>
                        </ul>
                        <div class="clearfix"></div>
                      </div>
                      <div>
                        <input type="submit" />
                      </div>
                        {/* <input type="submit" value="Submit" className="btn btn-success" /> */}
                    </form>
                 
                       {/* <pre>{JSON.stringify(values, null, 3)}</pre> */}
                       {/* <pre>{JSON.stringify("This field is required", null, 3)}</pre> */}
                       {/*https://react-hook-form.com/api/#register  */}
                  </div>
                </div>
        </div>
    )
}

export default Register
