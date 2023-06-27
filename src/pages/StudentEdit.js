
import axios from "axios";
import { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import  Loading from "../components/Loading.js"

function StudentEdit (){

        let { id } = useParams();//taking student id from url

    const [loading, setLoading] = useState (true);

    const [inputErrorList, setInputErrorList] = useState ({});

    const [student, setStudent] = useState({})


    const  handleInput = (e) => {
        e.persist();
        setStudent({...student, [e.target.name]: e.target.value});
    }

    const updateStudent = (e) => {
        e.preventDefault();

        setLoading(true);
        const data = {
            name : student.name,
            email : student.email,
            phone : student.phone,
            course : student.course,

        }

        axios.put(`http://localhost:8000/api/students/${id}/edit`, data)
        .then( res => {

            alert(res.data.message);// this message came from laravel rest api project studentController store function
            
            setLoading(false);

        })
        .catch(function (error) {

            if(error.response){

                if(error.response.status === 422 ){
                    setInputErrorList(error.response.data.errors)
                    setLoading(false);
                }

                if(error.response.status === 404 ){
                    alert(error.response.data.message)
                    setLoading(false);
                }

                if(error.response.status === 500 ){
                    alert(error.response.data)
                    setLoading(false);
                }
            }

        });
    }

    //for showing student id detail for edit
    useEffect( () =>{

        axios.get(`http://localhost:8000/api/students/${id}/edit`).then(res => {
             
                  console.log(res);
                  setStudent(res.data.student);
                  //if data came from api loading will disappear
                  setLoading(false);

        })
        .catch(function (error) {

            if(error.response){

                if(error.response.status === 404 ){
                    alert(error.response.data.message)
                    setLoading(false);
                }

                if(error.response.status === 500 ){
                    alert(error.response.data)
                    setLoading(false);
                }
            }
        });
        

    }, [id] )

    if(loading){
        return(
            <Loading />
        )
    }

    // if no data found
    if(Object.keys(student).length === 0 ){
        return(
            <div className="container">
                <h4>No sunch Student Id found.</h4>

            </div>
        )

    }

    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4> Edit Student
                             <Link to="/Students" className="btn btn-danger float-end">Back</Link>
                        </h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={ updateStudent }>
                            <div className="mb-3">
                                 <label>Name :</label>
                                 <input type="text" name="name" value={student.name} onChange={handleInput} className="form-control" placeholder="Enter Student Name" required></input>
                                 <span className="text-danger">{inputErrorList.name}</span>
                            </div>
                            <div className="mb-3">
                                 <label>Email :</label>
                                 <input type="text" name="email" value={student.email} onChange={handleInput} className="form-control" placeholder="Enter Email" required></input>
                                 <span className="text-danger">{inputErrorList.email}</span>
                            </div>
                            <div className="mb-3">
                                 <label>Phone :</label>
                                 <input type="number" name="phone" value={student.phone} onChange={handleInput} className="form-control" placeholder="Enter Phone Number" required></input>
                                 <span className="text-danger">{inputErrorList.phone}</span>
                            </div>
                            <div className="mb-3">
                                 <label>Course :</label>
                                 <input type="text" name="course" value={student.course} onChange={handleInput} className="form-control" placeholder="Enter Course" required></input>
                                 <span className="text-danger">{inputErrorList.course}</span>
                            </div>
                            <div className="mb-3">
                                 <button type="submit" className="btn btn-success">Update Student</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

}

export default StudentEdit;