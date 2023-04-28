import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    }

    return(
    <>
    <Button variant="info" onClick={backToHome}>Home</Button>
    </>
    );
};
export default Login;