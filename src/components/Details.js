import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';   
 
import Header from './Header';




const Details = () => {
    const [logindata, setLoginData] = useState([]);
    const [show, setShow] = useState(false); 

    const history = useNavigate();

    var todayDate = new Date().toISOString().slice(0, 10);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const User = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setLoginData(user);


            const userdate = logindata.map((el, k) => {
                return el.date === todayDate
            });
            if (userdate) {
                setTimeout(() => {
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = ()=>{
localStorage.removeItem("user_login")
history("/")
    }

    useEffect(() => {
        User();
    }, [])
    return (
        <>
      <Header />

            {
                logindata.length === 0 ? "error" :
                    <>
                        <h1 className='text-center pt-5'> <u> Sign In Successfully</u> </h1>
                        <h2 className='text-center pt-5'>{logindata[0].name}</h2>
                        <button className='btn btn-primary mt-5' style={{position:" relative",
    left:" 47%"}} onClick={userlogout}>LogOut</button>
                        {
                            logindata[0].date === todayDate ?
                            <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{logindata[0].name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Wel-come to Details Page</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>:""
                        }


                       
                    </>
            }
        </>
    )
}

export default Details
