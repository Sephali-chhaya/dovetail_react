import React from "react";
import { Form, Row, Col, FormCheck, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {

    const navigate = useNavigate();

    // const backToHome = () => {
    //     navigate('/');
    // }
    const handleLogin = () =>{ 
        navigate('/Dashboard');
    }

    return (
        <>
            <div className="container login">
                <br/> <br/>
                <p><h3>Sign in with credential</h3></p>
                <Form>
                    <Row>
                        <Col sm='12'>
                            <Form.Group className="mb-3" controlId="">
                              <Form.Control type="text" placeholder="Email" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='12'>
                            <Form.Group className="mb-3" controlId="">
                              <Form.Control type="text" placeholder="Password" />
                            </Form.Group>
                        </Col>
                    </Row>  
                    <Row>  
                    <Col sm='12'>
                            <Form.Group className="mb-3" controlId="">
                            <FormCheck inline type="checkbox" label="Remember me" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>  
                    <Col sm='12'>
                    <div className="d-grid gap-2">
                            <Button variant="primary" size="lg" onClick={handleLogin}>Sign in</Button>
                    </div>
                    </Col>
                    </Row>   
                </Form>

            </div>
        </>
    );
};
export default Login;