import React,{useState, useEffect} from 'react'
import Header from "./Header"
import axios from "axios"

function DisplayRegisterUser() {
    const [regData, setRegData] = useState([]);

    useEffect(()=>{
        getAllRegisterUser()
    },[])

    const getAllRegisterUser=()=>{
        axios.get(`http://localhost:8899/`)
        .then(reg=>{
            // console.log(reg)
            // if(reg.data.status === 200)
            // {
                console.log("reg.data")
                setRegData(reg.data)
            // }
        })
    }

    const delReg=(id)=>{
        alert(`delete ${id}`)
        if(window.confirm("Do u want to delete Resgister user ?"))
        {
            // DELETE http://localhost:8899/5f551d5c228be929ac5b15f0
            const DELETE_URL = `http://localhost:8899/${id}`
            //console.log(DELETE_URL)
            axios.delete(DELETE_URL)
            .then(res=>{
                console.log( res.data)
                alert("record deleted" + res.data)
                getAllRegisterUser()
                // .then(err=>{
                //     alert(err)
                // })
            })
        }
    }

    return (
        <div>
              <Header bannerCSS="banner inner-banner" />   
              <section className="row container">
                 <aside className="col-sm-4">
                     {/* <Sidebar /> */}
                 </aside>
                 <aside className="col-sm-8">
                     <h2>Register </h2>
                        <table className="table">
                            <tr>
                                <td colSpan={3} class="text-center">
                                    {/* <Link to="/dashboard/addcat" className="alert alert-danger">Add Category</Link> */}
                                    </td>
                            </tr>  
                            <tr>
                                <th>S.no</th>
                                <th>Name</th>
                                <th>Email</th>
                                {/* <th>Created At</th>
                                <th>Action</th> */}
                            </tr>   
                            {regData.map((reg,ind)=>
                                <tr>
                                    <td>{ind+1}</td>
                                    <td>{reg.name}</td>
                                    <td>{reg.email}</td>
                                    <td>
                                        <button onClick ={()=>delReg(reg._id)}>Delete</button>
                                        {/* <button onClick={()=> delCat(cat._id)}>Delete</button> */}
                                    </td>
                                </tr>)}        
                        </table>
                </aside>
             </section>
            </div>
    )
}

export default DisplayRegisterUser
