import React, { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import "./Home.css";
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import SiteLogo from '..//../Components/Assets/images/SiteLogo.jpg'
import Nalanda from '..//../Components/Assets/images/fabfinnercropped1.png'
const Home = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/Login');
    }

    return (
        <>
            <div className='container-sm'>
                <Row>
                    <Col sm='12' className='d-flex justify-content-end mt-2'>
                    <Button variant="warning" onClick={handleLogin}>Login </Button>
                    <img src={SiteLogo} height={30} width={150}></img>
                    </Col>

                </Row>
                <div id="fab1">
                    <img src={Nalanda} height={40} width={200}></img>
                </div>

                <Row>
                    <Col sm='12' id="deffren">  NALANDA INDUSTRIAL CORPORATION</Col>
                </Row>

                <div id="kund">
                    <a href='#' className='a'>HOME</a>
                    <a href='#' className='a'> SUPPORT</a>
                </div>
            </div>


        </>

    )
}

export default Home