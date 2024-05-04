import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(()=> {
        let login = localStorage.getItem('user_login');
        if(!login){
            navigate('/login');
        }
    });
    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected;

