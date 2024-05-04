import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Signimg from './Signimg'
import { useNavigate } from 'react-router-dom';

import Header from './Header';


const Login = () => {
    const history = useNavigate();
    const [inpval, setInputval] = useState({
        email: "",
        password: ""
    });
// const [data,setData] = useState([]);
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
const getUserArr = localStorage.getItem("FormData");
console.log(getUserArr);
const {email,password} = inpval;   

 if(email === ""){
    alert('email is requred');
} else if(!email.includes("@")){
    alert('enter valid email')
}  else if(password === ""){
    alert('password is requred');
} else if(password.length <5){
    alert('password length gretter five')
} else{
const userdata = JSON.parse(getUserArr);
const userlogin = userdata.filter((el,k)=>{
    return el.email === email && el.password === password
});
if(userlogin.length === 0){
    alert('invalid detail');
}else{
    localStorage.setItem("user_login",JSON.stringify(userlogin))
    history("/details");
}
}
    }
    return (
        <>
      <Header />

            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data p-3" style={{ width: "100%" ,position: "relative",
    top: "15px"}}>
                        <h3 className='text-center col-lg-6'>Sign In</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" >
                                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='col-lg-6' onClick={addData} style={{ background: "rgb(67,185,127)" }}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span>SignIn</span></p>
                    </div>
                    <Signimg />
                </section>
            </div>
        </>
    )
}

export default Login
