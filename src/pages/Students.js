import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  Loading from "../components/Loading.js"


function Student (){

    //for showing Loading
    const [loading, setloading] = useState(true);

    //using useState for storing api data in a variable
    const [students, setstudents] = useState([]);

    useEffect( () =>{

        axios.get('http://localhost:8000/api/students').then(res => {
             
                  console.log(res);
                  setstudents(res.data.students);
                  //if data came from api loading will disappear
                  setloading(false);


        });

    }, [] )

    if(loading){
        return(
            <Loading />
        )
    }

    var studentDetails = ""; 
    studentDetails = students.map( (item, index) => {

          return(
            <tr key = {index} >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                    <Link to= "/" className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
          )
    });

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4> Student List
                                 <Link to="/add-student" className="btn btn-primary float-end">Add Student</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Course</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentDetails}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Student;