import React, { useState } from "react";
import nalanda from "..//..//Assets/images/nalanda.jpg";
import { Row, Col } from "react-bootstrap";
import { BoxArrowInLeft, PersonCircle, PersonFill } from "react-bootstrap-icons";
import { Tooltip } from "@material-ui/core";
import './Header.css'
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const [openSupport, SetOpenSupport] = useState(false);
    const [openCmpny, SetOpenCmpny] = useState(false);
    const handleSupport = () => {
        SetOpenSupport(!openSupport)
    }
    const handleCompaney = () => {
        SetOpenCmpny(!openCmpny)
    }
    const handleLogout = () => {
        navigate('/');
    }

    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: '#7f90fa', height: '65px' }}>
                <Row>
                    <Col sm='' className="mt-3">
                    <Tooltip title='Click me for more options' placement="right">
                        <img className="header" src={nalanda} alt="logo" onClick={handleCompaney} />
                      </Tooltip> 
                        {openCmpny == true &&
                            <>
                                <div className="cmpnyDrop">
                                    <select>
                                        <option value={''}>----Select----</option>
                                        <option value={1}>NALANDA INDUSTRIAL CORPORATION</option>
                                    </select>
                                </div>
                            </>
                        }
                    </Col>
                    <Col sm='' className="mt-3 d-flex justify-content-end header">
                        <Tooltip title='SUPPORT' placement="left">
                            <PersonCircle color="White" size={40} onClick={handleSupport} />
                        </Tooltip>
                        {openSupport == true &&
                            <>
                                <div className="support ms-2">
                                    <p>
                                        <PersonFill color="#7f90fa" size={30} />
                                        My profile
                                    </p>
                                    <p onClick={handleLogout}>
                                        <BoxArrowInLeft color="#7f90fa" size={30} />
                                        Logout
                                    </p>
                                </div>
                            </>
                        }
                    </Col>
                </Row>
            </div>
        </>
    );
};
export default Header;