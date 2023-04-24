import React from "react";
import { Plus } from "react-bootstrap-icons";
import { Col, Container, Form, Row, FormCheck, Dropdown } from "react-bootstrap";
const CustomerInfo = (props ) => {
    return (
        <>
            <Container style={{backgroundColor:'#f0f0f5'}}>
                <Form>
                    <Row>
                        <Col sm='3'>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Customer Name</Form.Label>
                                <Plus color="blue" size={30} />
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                        </Col>
                        <Col sm='3'>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Bill To Address</Form.Label>
                                <Form.Control type="text" placeholder="Bill To Address" />
                            </Form.Group>
                        </Col>
                        <Col sm='3'>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Ship To Address</Form.Label>
                                <Form.Control type="text" placeholder="Ship To Address" />
                                {/* <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        -----Select-----
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                            </Form.Group>
                        </Col> 
                        <Col sm='3'>
                            <Form.Group className="mb-3" controlId="">
                                <span>Invoice-No.
                                    <FormCheck inline type="checkbox" label="Auto generate" /></span>
                                <Form.Control type="text" placeholder=""/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='3'>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Invoice Date</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Col>
                        <Col sm='3'>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Invoice Due Date</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Col>
                        <Col sm='3'>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Sales Order No</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                        </Col>
                        <Col sm='3'>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Sales Person/Ref. Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='2'>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Payment Mode</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                        </Col>
                        <Col sm='1'>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>TCS(%)</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                        </Col>
                        <Col sm='3'>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Delivery Note</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                        </Col>
                        <Col sm='3'>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Tax(in)</Form.Label><br />
                                <Form.Check inline label='CGST+SGST' type="radio" name="check1" checked/>
                                <Form.Check inline label='IGST' type="radio" name="check1"/>
                            </Form.Group>
                        </Col>
                        <Col sm='3'>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Tax Amount(₹ 0)</Form.Label>
                                <br />
                                <Form.Label>Net Amount(₹ 0)</Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

            </Container>
        </>
    )
}
export default CustomerInfo;