import React, { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import "./Home.css";
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import SiteLogo from '..//../Components/Assets/images/SiteLogo.jpg'
import Nalanda from '..//../Components/Assets/images/fabfinnercropped1.png'
<<<<<<< HEAD
=======
import Login from '../loginPage/Login';
import Loader from '../../Components/Loader/Loader';

>>>>>>> master
const Home = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/Login');
    }

    return (
        <>
<<<<<<< HEAD
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
=======
            <div className='container-fluid'>
                <Row>
                    <Col sm='12' className='d-flex justify-content-end mt-2'>
                    {/* <Button variant="warning" onClick={handleLogin}>Login </Button> */}
                    <img src={SiteLogo} height={30} width={150}/>
                    </Col>

                </Row>
                <div className='text-center'>
                <Row>
                    <Col sm='12'><img src={Nalanda} height={40} width={200}/> </Col>
                </Row>
                <Row>
                    <Col sm='12'  b> <h1>NALANDA INDUSTRIAL CORPORATION</h1> </Col>
                </Row>

                {/* <div>
                    <a>HOME</a>
                    <a> SUPPORT</a>
                </div> */}
                </div>
            </div>
            <div className='text-center'>
                <br/>
                <Login/>
            </div>
>>>>>>> master


        </>

    )
}

export default Home