import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Signimg from './Signimg';
import { NavLink } from 'react-router-dom';
import Header from './Header';

const Home = () => {
    const [inpval, setInputval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    });
const [data] = useState([]);
    const getdata = (e) => {
        const { value, name } = e.target;
        setInputval(() => {
            return {
                ...inpval,
                [name]: value
            };
        });
    };

    const addData =(e) => {
e.preventDefault();
const {name,email,date,password} = inpval;   

if(name === ""){
    alert('Name is requred');
} else if(email === ""){
    alert('email is requred');
} else if(!email.includes("@")){
    alert('enter valid email')
} else if(date === ""){
    alert('date is requred');
} else if(password === ""){
    alert('password is requred');
} else if(password.length <5){
    alert('password length gretter five')
} else{
localStorage.setItem("FormData",JSON.stringify([...data,inpval]));
}
    }
    return (
        <>
      <Header />
        <div className="container mt-3">
            <section className='d-flex justify-content-between'>
                <div className="left_data p-3" style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-6'>Sign Up</h3>
                    <Form>
                        <Form.Group className="mb-3 col-lg-6">
                            <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Your Name" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6">
                            <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6">
                            <Form.Control type="date" name="date" onChange={getdata} />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" >
                            <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='col-lg-6' onClick={addData} style={{ background: "rgb(67,185,127)" }}>
                            Submit
                        </Button>
                    </Form>
                    <p className='mt-3'>Already Have an Account <span><NavLink to="/login" >SignIn</NavLink></span></p>
                </div>
                <Signimg />
            </section>
        </div>
        </>
    );
}

export default Home;
